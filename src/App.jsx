import React, { useState } from "react";
import Users from "./Components/Users";
import UsersForm from "./Components/UsersForm";

const App = () => {
  const [students, setStudents] = useState([]);

  function handleAddUser(newUsers) {
    setStudents([...students, newUsers]);
  }

  function handleDeleteUser(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function handleEditUser(id, updatedInfo) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return updatedInfo;
        } else {
          return student;
        }
      })
    );
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" bg-blue-300">
          <UsersForm handleAddUser={handleAddUser} />
        </div>
        <div className="w-full bg-yellow-100">
          <Users
            handleEditUser={handleEditUser}
            users={students}
            handleDeleteUser={handleDeleteUser}
          />
        </div>
      </div>
    </>
  );
};

export default App;
