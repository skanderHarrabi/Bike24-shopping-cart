import useNotification from "antd/es/notification/useNotification";
import {createContext} from "react";
import {
  NotificationContextType,
  NotificationProviderProps,
} from "../types/types";

export const NotificationContext = createContext({} as NotificationContextType);

export const NotificationProvider = ({children}: NotificationProviderProps) => {
  const notification = useNotification();
  const [api, contextHolder] = notification;

  const openNotification = (
    title: string,
    description: string,
    isSuccess = false
  ) => {
    if (isSuccess) {
      api.success({
        message: title,
        description: description,
        onClick: () => {},
        placement: "topRight",
        duration: 3,
      });
    } else
      api.warning({
        message: title,
        description: description,
        onClick: () => {},
        placement: "topRight",
        duration: 3,
      });
  };

  return (
    <NotificationContext.Provider value={{openNotification}}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
