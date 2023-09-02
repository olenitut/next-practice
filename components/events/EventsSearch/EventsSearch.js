import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "../../ui/Button/Button";

import styles from "./events-search.module.css";

const EventsSearch = () => {
  const yearRef = useRef();
  const monthRef = useRef();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;

    router.push(`/events/${year}/${month}`);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value={4}>April</option>
            <option value={5}>May</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
