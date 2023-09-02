import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ children, path }) => {
  return (
    <Link href={path} className={styles.btn}>
      {children}
    </Link>
  );
};

export default Button;
