import styles from "../assets/styles/Progressbar.module.css";
import Button from "./Button";

export default function Progressbar() {
  return (
    <div className={styles.progressBar}>
      <Button className={styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={styles.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}
