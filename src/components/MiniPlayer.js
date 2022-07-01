import image from "../assets/images/3.jpg";
import styles from "../assets/styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={image} alt="imagefile" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
