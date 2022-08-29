import { Link } from "react-router-dom";
import styles from "../assets/styles/Account.module.css";
import { useAuth } from "../Providers/AuthProvider";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={styles.account}>
      {currentUser ? (
        <>
          <span class="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
