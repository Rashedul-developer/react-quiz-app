import img from "../assets/images/signup.svg";
import styles from "../assets/styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={styles.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
}
