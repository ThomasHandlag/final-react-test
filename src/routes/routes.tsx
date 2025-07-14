import { createBrowserRouter, Navigate } from "react-router";
import UserProvider from "../pages/UserProvider";
import UserDetail from "../pages/UserDetail";
import UserList from "../pages/UserList";
import Holder from "../pages/Holder";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Holder/>,
    children: [
      {
        index: true,
        element: <Navigate to="home" />
      },
      {
        path: "home",
        element: <UserProvider />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "users/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

export default routes;
