import React from "react";
import EditUsersForm from "./EditUsersForm";

const Users = ({ users, handleDeleteUser, handleEditUser }) => {
  return (
    <div>
      <div className="m-10">
        <h1 className="text-2xl mb-5 font-bold">Codetrain Students List</h1>
        <ol
          style={{ listStyle: "decimal" }}
          className="flex flex-row flex-wrap gap-10"
        >
          {users.map((user) => {
            return (
              <div
                className="mb-5 border rounded-xl p-5 bg-slate-300"
                key={user.id}
              >
                <li>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Gen: {user.gen}</p>
                </li>
                <div className="flex gap-5 mt-5">
                  <EditUsersForm handleEditUser={handleEditUser} user={user} />

                  <button
                    className="btn btn-error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Users;
