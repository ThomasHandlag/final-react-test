import type { NotificationInstance } from "antd/es/notification/interface";
import React from "react";

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

export default NotificationContext;