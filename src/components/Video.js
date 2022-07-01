import { Link } from "react-router-dom";
import videoImg from "../assets/images/3.jpg";
import styles from "../assets/styles/Video.module.css";

export default function Video() {
  return (
    <Link to="/quiz">
      <div className={styles.video}>
        <img src={videoImg} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}
