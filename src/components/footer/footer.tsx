import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <p className={styles.footer__copyright}>&copy;2024.Bella Mironova</p>
      </div>
    </footer>
  );
};
