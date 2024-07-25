import { ReactNode } from "react";
import styles from "./pageWrapper.module.scss";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default PageWrapper;
