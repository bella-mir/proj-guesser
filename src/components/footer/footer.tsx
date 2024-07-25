import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <p className={styles.footer__copyright}>&copy;2024.Bella Mironova</p>
      </footer>
    </div>
  );
};
