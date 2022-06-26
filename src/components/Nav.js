import logoBg from "../assets/images/logo-bg.png";
import styles from "../assets/styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={logoBg} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
