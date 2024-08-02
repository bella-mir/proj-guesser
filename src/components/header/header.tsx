import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.header__logo}></NavLink>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                main
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learn"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                learn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                about
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
