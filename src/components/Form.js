import styles from "../assets/styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${styles.form} ${className}`} {...rest}>
      {children}
    </form>
  );
}
