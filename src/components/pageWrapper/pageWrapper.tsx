import { ReactNode } from "react";
import styles from "./pageWrapper.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

export const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.pageWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
