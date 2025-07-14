import { notification } from "antd";
import "./App.css";
import NotificationContext from "./enum/context";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import { UserContext } from "./pages/contexts";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  username: string;
  email: string;
  age: number | null | undefined;
}

function App() {
  const [api, contextHolder] = notification.useNotification();

  const [users, setUsers] = useState<User[]>([]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [users]);

  const addUser = (user: User[]) => {
    setUsers((prevUsers) => [...prevUsers, ...user]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers: addUser, index }}>
    <NotificationContext.Provider value={{ header: "", message: "", api }}>
      <RouterProvider router={routes} />
      {contextHolder}
    </NotificationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
