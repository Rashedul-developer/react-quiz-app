import styles from "../assets/styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="answer 1" />
    </div>
  );
}
