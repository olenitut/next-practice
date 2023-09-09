import { useContext, useState } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const [input, setInput] = useState("");
  const { showNotification } = useContext(NotificationContext);

  async function registrationHandler(event) {
    event.preventDefault();
    showNotification({
      title: "sending",
      message: "Sending you email",
      status: "pending",
    });
    const res = fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input }),
    });

    showNotification({
      title: "Succes",
      message: "Registered successfully",
      status: "success",
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
