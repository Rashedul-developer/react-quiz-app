import { Link } from "react-router-dom";
import styles from "../assets/styles/Account.module.css";

export default function Account() {
  return (
    <div className={styles.account}>
      <span class="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      {/* <span class="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </span> */}
    </div>
  );
}
