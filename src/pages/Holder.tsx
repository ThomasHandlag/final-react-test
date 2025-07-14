import { NavLink, Outlet } from "react-router";

const Holder = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center">
        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive ? "text-blue-500 ml-4" : "text-gray-500 ml-4"
          }
        >
          Users
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Holder;
