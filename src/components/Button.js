import styles from "../assets/styles/Button.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <button {...rest} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
