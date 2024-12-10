import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <div className="m-10">
        <h1 className="text-2xl mb-5 font-bold">Codetrain Students List</h1>
        <ol
          style={{ listStyle: "decimal" }}
          className="flex flex-row flex-wrap gap-10"
        >
          {users.map((user) => (
            <li className="mb-5 border rounded-xl p-5 bg-slate-300">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Gen: {user.gen}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Users;
