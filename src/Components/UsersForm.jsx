import React, { useState } from "react";
import { MdNumbers } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

const UsersForm = ({ handleAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGen = (e) => {
    setGen(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleAddUser({ name, email, gen: Number(gen) });

    setName("");
    setEmail("");
    setGen("");
  }
  return (
    <div className="m-10">
      <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">Student Form</h1>
        <label className="input input-bordered flex items-center gap-2">
          <IoMdPerson />
          <input
            type="text"
            className="grow"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <IoMdMail />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdNumbers />
          <input
            type="number"
            className="grow"
            placeholder="Gen"
            value={gen}
            onChange={handleGen}
          />
        </label>
        <button className="btn bg-blue-500">Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
