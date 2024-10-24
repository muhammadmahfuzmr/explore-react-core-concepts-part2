import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, []);
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Total User: {users.length}</h1>
      {
        users.map(user=> <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;
