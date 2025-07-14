import type { NotificationInstance } from "antd/es/notification/interface";
import React, { useContext } from "react";

type NotificationContextContent = {
    header: string;
    message: string;
    api: NotificationInstance;
};

const NotificationContext = React.createContext<NotificationContextContent>({
    header: "",
    message: "",
    api: {} as NotificationInstance
});

export const useAppNotification = () => useContext(NotificationContext);

export default NotificationContext;