import EventItem from "../EventItem/EventItem";

import styles from "./event-list.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((el) => (
        <EventItem key={el.id} item={el} />
      ))}
    </ul>
  );
};

export default EventList;
