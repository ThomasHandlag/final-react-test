import { useNavigate } from "react-router";
import { useUsers } from "./contexts";

const UserList = () => {
  const { users } = useUsers();

  const navigate = useNavigate();

  return (
    // add tailwind classes for styling table
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    navigate(`/users/${user.id}`);
                  }}
                >
                  {user.username}
                </button>
              </td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.age ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
