import Button from "antd/es/button";
import { useAppDispatch } from "../../../../app/app-types";
import { useSelector } from "react-redux";
import {
  getQuestionNumber,
  getQuestionType,
  getQuizMode,
} from "../../../../app/app-selectors";
import {
  setQuestionNumber,
  setQuestionType,
  setQuizMode,
} from "../../../../app/app-actions";
import Slider, { SliderSingleProps } from "antd/es/slider";
import styles from "./quiz.module.scss";
import { useContext, useEffect, useMemo, useState } from "react";
import { PROJECTIONS } from "../../../../components/map/map-constants";
import { getAnswers, getRightAnswer } from "../../../../utils/shuffleArray";
import { QuizContext } from "../../quizContext";
import CheckCircleTwoTone from "@ant-design/icons/lib/icons/CheckCircleTwoTone";
import Select from "antd/es/select";

export const Quiz = () => {
  const { setCurrentQuizProjection, projQuestions, setQuestions } =
    useContext(QuizContext);
  const dispatch = useAppDispatch();
  const quizMode = useSelector(getQuizMode);
  const questionType = useSelector(getQuestionType);
  const questionNumber = useSelector(getQuestionNumber);

  const [projAnswers, setProjAnswers] = useState<string[] | undefined>(
    undefined
  );

  const [questionCount, setQuestionsCount] = useState<number>(0);

  const [scoreCount, setScoreCount] = useState<number>(0);

  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const onChange = (value: "names" | "properties") => {
    dispatch(setQuestionType(value));
  };

  useEffect(() => {
    return () => {
      dispatch(setQuizMode("start"));
    };
  }, [dispatch]);

  const onButtonClick = () => {
    dispatch(setQuizMode("start"));
  };
  const rightAnswer = useMemo(() => {
    if (!projQuestions) {
      return;
    }
    const rightAnswer = getRightAnswer({
      type: questionType,
      element: questionCount,
      array: projQuestions,
    });

    return rightAnswer;
  }, [projQuestions, questionCount, questionType]);

  const onButtonClickStart = () => {
    setScoreCount(0);
    if (!projQuestions) {
      return;
    }
    const answers = getAnswers({
      type: questionType,
      element: questionCount,
      array: projQuestions,
    });
    setProjAnswers(() => answers);
    dispatch(setQuizMode("questions"));
    projQuestions && setCurrentQuizProjection(projQuestions[0]["id"]);
  };

  const onButtonClickQuestions = () => {
    if (!projQuestions) {
      return;
    }
    if (questionCount === questionNumber - 1) {
      dispatch(setQuizMode("results"));
      setQuestionsCount(0);
      setClickedButton(null);
    } else {
      const answers = getAnswers({
        type: questionType,
        element: questionCount + 1,
        array: projQuestions,
      });
      setQuestionsCount(() => questionCount + 1);
      setProjAnswers(() => answers);
      setClickedButton(null);
      projQuestions &&
        setCurrentQuizProjection(projQuestions[questionCount + 1]["id"]);
    }
  };

  const handleClick = (name: string) => {
    setClickedButton(name);
    if (!projQuestions) {
      return;
    }
    if (name === rightAnswer) {
      setScoreCount(() => scoreCount + 1);
    }
  };

  const onQuestionNumberChange = (value: number | null) => {
    if (value == null) {
      return;
    }
    dispatch(setQuestionNumber(value));
  };

  const options = [
    { label: "Names", value: "names" },
    { label: "Properties", value: "properties" },
  ];

  const marks: SliderSingleProps["marks"] = {
    5: "5",
    10: "10",
    15: "15",
  };

  useEffect(() => {
    const projectionKeys = Object.keys(PROJECTIONS);
    const shuffledKeys = projectionKeys.sort(() => Math.random() - 0.5);
    const randomKeys = shuffledKeys.slice(0, questionNumber);
    const randomProjections = randomKeys.map((key) => PROJECTIONS[key]);
    setQuestions(randomProjections as []);
  }, [questionNumber, setQuestions]);

  return (
    <>
      {(() => {
        switch (quizMode) {
          case "start":
            return (
              <div className={styles.quizStart}>
                {/* <strong>Customize Your Quiz</strong> */}
                <div className={styles.group}>
                  <span>Type of questions</span>
                  <Select
                    options={options}
                    onChange={onChange}
                    value={questionType}
                    // options={PROJECTIONS_OPTIONS}
                    // defaultValue={currentProjection}
                    // onChange={(value: string) => setCurrentProjection(value)}
                    // size="large"
                    className={styles.select}
                  />
                  {/* <Radio.Group
                    options={options}
                    onChange={onChange}
                    value={questionType}
                    optionType="button"
                    buttonStyle="solid"
                  /> */}
                </div>
                <div className={styles.group}>
                  <span>Number of questions</span>
                  <div>
                    <Slider
                      defaultValue={10}
                      value={questionNumber}
                      onChange={onQuestionNumberChange}
                      max={15}
                      min={5}
                      step={5}
                      marks={marks}
                      className={styles.slider}
                    />
                  </div>
                </div>
                <Button
                  onClick={onButtonClickStart}
                  className={styles.startButton}
                  type="primary"
                >
                  Start
                </Button>
              </div>
            );
          case "questions":
            return (
              <div className={styles.quizQuestions}>
                <div className={styles.questionsHeader}>
                  <span className={styles.questionsScore}>
                    Score: {scoreCount}
                  </span>
                  <span className={styles.questionsCount}>
                    Question {questionCount + 1}/{questionNumber}
                  </span>
                </div>
                <h2>
                  &#x2190;
                  {questionType === "names"
                    ? "Projection Name..."
                    : "Projection Type and Property..."}
                </h2>
                <div className={styles.questionsAnswers}>
                  {projQuestions &&
                    projAnswers?.map((name) => (
                      <>
                        <Button
                          key={name}
                          onClick={() => handleClick(name)}
                          className={styles.answersButton}
                          style={{
                            backgroundColor:
                              clickedButton === name && name === rightAnswer
                                ? "#00A6A6"
                                : clickedButton === name && name !== rightAnswer
                                ? "#F21F44"
                                : "#F1BE20",
                            // border:
                            //   clickedButton &&
                            //   clickedButton !== name &&
                            //   name == rightAnswer
                            //     ? "1px solid #00A6A6"
                            //     : "none",
                          }}
                          disabled={clickedButton ? true : false}
                        >
                          {name}
                          {clickedButton && name === rightAnswer && (
                            <CheckCircleTwoTone twoToneColor="#00A6A6" />
                          )}
                        </Button>
                      </>
                    ))}
                </div>
                <Button
                  onClick={onButtonClickQuestions}
                  disabled={!clickedButton}
                >
                  {questionCount === questionNumber - 1
                    ? "EndQuiz"
                    : "Next one"}
                </Button>
              </div>
            );
          case "results":
            return (
              <div className={styles.quizEnd}>
                <span className={styles.scoreResults}>
                  Your score:{" "}
                  <span className={styles.score}>{scoreCount} </span>/{" "}
                  {questionNumber}
                </span>
                <Button
                  onClick={onButtonClick}
                  className={styles.buttonTry}
                  type="primary"
                >
                  Try again
                </Button>
              </div>
            );
        }
      })()}
    </>
  );
};
