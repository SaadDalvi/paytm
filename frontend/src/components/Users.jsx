import { useEffect, useState } from "react";
import Button from "./BlueButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/users/bulk?filter="+filter)
      .then((response) => setUsers(response.data.user));
  }, [filter]);
  return (
    <>
      <div className="bg-white w-full shadow-md mt-3 border border-slate-100 rounded-md p-2">
        <div className="text-lg font-bold py-2">Users</div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="text-sm px-4 py-1 w-full rounded-md border border-gray-300 outline-none"
          type="text"
          placeholder="Search Users"
        />
        <div>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

function UserCard({ user }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col w-full py-1 ">
        <div className="flex justify-between items-center w-full border border-slate-300 rounded-md px-2 ">
          <div className="flex gap-2 items-center">
            <div className="bg-slate-400 rounded-full w-8 h-8 flex items-center justify-center">
              <span>{user.firstName[0]}</span>
            </div>
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div></div>
          </div>
          <Button onClick={(e)=>{
           navigate(`/send?id=${user._id}&name=${user.firstName}`)
          }} label={"Send money"} />
        </div>
      </div>
    </>
  );
}
