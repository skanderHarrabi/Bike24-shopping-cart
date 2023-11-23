import {useContext} from "react";
import {NotificationContext} from "../context/NotificationContext";

export const useNotification = () => {
  const context = useContext(NotificationContext);
  return context;
};
