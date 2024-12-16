import React, { useState, useRef } from "react";
import { MdNumbers } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

function EditUsersForm({ user, handleEditUser }) {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

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

    let updatedUser = { name, email, gen: Number(gen), id: user.id };
    handleEditUser(user.id, updatedUser);
    closeModal();
  }
  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn btn-success" onClick={openModal}>
        Edit
      </button>

      {/* Modal component */}
      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit!</h3>
            <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
              <h1 className="text-xl font-bold">Student Form</h1>
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

              <div className="modal-action">
                {/* Close button */}
                <button className="btn btn-error" onClick={closeModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default EditUsersForm;
