import styles from "../assets/styles/Button.module.css";

export default function Button({ className, children }) {
  return <div className={`${styles.button} ${className}`}>{children}</div>;
}
