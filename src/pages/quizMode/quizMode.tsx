import { useState } from "react";
import { Carto, Quiz } from "../../components";
import { QuizContext } from "./quizContext";
import styles from "./quizMode.module.scss";

export const QuizMode = () => {
  const [currentQuizProjection, setCurrentQuizProjection] =
    useState("equalearth");
  return (
    <>
      <QuizContext.Provider
        value={{ currentQuizProjection, setCurrentQuizProjection }}
      >
        <div className={styles.content}>
          <div className={styles.map}>
            <Carto currentProjection={currentQuizProjection} />
          </div>
          <div className={styles.quiz}>
            <Quiz />
          </div>
        </div>
      </QuizContext.Provider>
    </>
  );
};
