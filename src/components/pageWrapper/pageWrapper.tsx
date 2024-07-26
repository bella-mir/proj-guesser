import { ReactNode } from "react";
import styles from "./pageWrapper.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
  main?: boolean;
}

export const PageWrapper = ({ title, children, main }: PageWrapperProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.contentWrapper}>
        <h1 className={`${styles.title} ${main ? styles.titleCentered : ""}`}>
          {title}
        </h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
