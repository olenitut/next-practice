import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

import classes from "./notification.module.css";

function Notification() {
  const notificationCtx = useContext(NotificationContext);

  if (!notificationCtx.notification) return null;

  const { title, message, status } = notificationCtx.notification;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
