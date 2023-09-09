import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export default NotificationContext;

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState();

  const showNotification = (notification) => {
    setNotification(notification);
  };
  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
