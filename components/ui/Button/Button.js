import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ children, path, onClick }) => {
  if (path) {
    return (
      <Link href={path} className={styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
