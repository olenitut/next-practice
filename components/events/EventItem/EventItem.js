import Button from "../../ui/Button/Button";
import Image from "next/image";

import styles from "./event-item.module.css";

import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

const EventItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <Image src={item.image} alt={item.title} width={340} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>
              {new Date(item.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{item.location.replace(", ", "\n")}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button path={`/events/${item.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
