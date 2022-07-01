import { Link } from "react-router-dom";
import logoBg from "../assets/images/logo-bg.png";
import styles from "../assets/styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logoBg} alt="Learn with Sumit Logo" />
            <h3>React Quiz</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
