import { useParams } from "react-router";
import { useUsers } from "./contexts";

const UserDetail = () => {
    const params = useParams();
    const userId = Number(params.id);

    const { users } = useUsers();

    const user = users.find((u) => u.id === userId);

    if (!user) {
        return <div className="flex justify-center items-center font-bold">User not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-bold mb-4">User Detail</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <p className="mb-2"><strong>Username:</strong> {user.username}</p>
                <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age ?? "N/A"}</p>
            </div>
        </div>
    );
}

export default UserDetail;