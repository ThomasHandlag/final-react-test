import { notification } from "antd";
import "./App.css";
import NotificationContext from "./enum/context";
import { RouterProvider } from "react-router";
import routes from "./routes/routes";

function App() {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={{ header: "", message: "", api }}>
      <RouterProvider router={routes} />
      {contextHolder}
    </NotificationContext.Provider>
  );
}

export default App;
