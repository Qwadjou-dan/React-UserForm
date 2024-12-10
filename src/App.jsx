import React, { useState } from "react";
import Users from "./Components/Users";
import UsersForm from "./Components/UsersForm";

const App = () => {
  const [students, setStudents] = useState([
    {
      name: "Daniel",
      email: "dan@gmail.com",
      gen: 29,
    },
    {
      name: "David",
      email: "dave@gmail.com",
      gen: 30,
    },
    {
      name: "Esther",
      email: "est@gmail.com",
      gen: 20,
    },
  ]);

  function handleAddUser(newUsers) {
    setStudents([...students, newUsers]);
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" bg-blue-300">
          <UsersForm handleAddUser={handleAddUser} />
        </div>
        <div className="w-full bg-yellow-100">
          <Users users={students} />
        </div>
      </div>
    </>
  );
};

export default App;
