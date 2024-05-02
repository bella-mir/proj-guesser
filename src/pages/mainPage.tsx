import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/app-types";
import { setAppMode, setQuizMode } from "../app/app-actions";
import { Radio, RadioChangeEvent } from "antd";
import { getAppMode } from "../app/app-selectors";
import { QuizMode } from "./quizMode";
import { LearnMode } from "./learnMode";
import styles from "./mainPage.module.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const appMode = useSelector(getAppMode);

  const options = [
    { label: "Learn Mode", value: "learn" },
    { label: "Quiz Mode", value: "quiz" },
  ];

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    dispatch(setAppMode(value));
    dispatch(setQuizMode("start"));
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        {/* <h1>Map Projections</h1> */}
        <Radio.Group
          options={options}
          onChange={onChange}
          value={appMode}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      {appMode === "quiz" ? <QuizMode /> : <LearnMode />}
    </div>
  );
};
