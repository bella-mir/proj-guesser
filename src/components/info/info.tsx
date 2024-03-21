import styles from "./info.module.scss";

export const Info = () => {
  return (
    <div className={styles.content}>
      <span className={styles.title}>Name</span>
      <div className={styles.block}>
        <span className={styles.categoryName}>Type</span>
        <span>Type description</span>
      </div>
      <div className={styles.block}>
        <span className={styles.categoryName}>Property</span>
        <span>Property description</span>
      </div>
    </div>
  );
};
