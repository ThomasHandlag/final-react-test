import UserForm from "./UserForm";
import UserList from "./UserList";

const UserProvider = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-5">
      <div className="col-span-1 lg:col-span-2">
        <UserForm />
      </div>
      <div className="col-span-1 lg:col-span-3">
        <UserList />
      </div>
    </div>
  );
};

export default UserProvider;
