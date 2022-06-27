import styles from "../assets/styles/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}
