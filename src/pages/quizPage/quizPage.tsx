import { useState } from "react";
import { QuizContext } from "./quizContext";
import styles from "./quizPage.module.scss";
import { TProj } from "../../components/map/map-constants";
import { useSelector } from "react-redux";
import { getQuizMode } from "../../app/app-selectors";
import { Quiz } from "./components";
import { Carto } from "../../components";

export const QuizPage = () => {
  const [currentQuizProjection, setCurrentQuizProjection] =
    useState("equalearth");
  const [projQuestions, setQuestions] = useState<TProj[] | undefined>(
    undefined
  );
  const quizMode = useSelector(getQuizMode);
  return (
    <div className={styles.page}>
      <QuizContext.Provider
        value={{
          currentQuizProjection,
          setCurrentQuizProjection,
          projQuestions,
          setQuestions,
        }}
      >
        <div className={styles.content}>
          <div className={styles.map}>
            {quizMode !== "results" && (
              <Carto currentProjection={currentQuizProjection} />
            )}
          </div>
          <div className={styles.quiz}>
            <Quiz />
          </div>
        </div>
      </QuizContext.Provider>
    </div>
  );
};
