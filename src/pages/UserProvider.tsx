import UserForm from "./UserForm";
import UserList from "./UserList";

const UserProvider = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserProvider;
