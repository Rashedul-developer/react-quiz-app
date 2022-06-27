import styles from "../assets/styles/Form.module.css";

export default function Form({ children, ...rest }) {
  return (
    <form className={`${styles.signup} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}
