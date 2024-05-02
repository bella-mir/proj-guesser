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
import Radio, { RadioChangeEvent } from "antd/es/radio";
import Slider, { SliderSingleProps } from "antd/es/slider";
import styles from "./quizMode.module.scss";
import { InputNumber } from "antd";
import { useContext, useEffect, useMemo, useState } from "react";
import { PROJECTIONS, TProj } from "../../../map/map-constants";
import { MapContext } from "../../../../mapContext";
import { getAnswers, getRightAnswer } from "../../../../utils/shuffleArray";

export const QuizMode = () => {
  const { setCurrentProjection } = useContext(MapContext);
  const dispatch = useAppDispatch();
  const quizMode = useSelector(getQuizMode);
  const questionType = useSelector(getQuestionType);
  const questionNumber = useSelector(getQuestionNumber);

  const [projQuestions, setQuestions] = useState<TProj[] | undefined>(
    undefined
  );

  const [projAnswers, setProjAnswers] = useState<string[] | undefined>(
    undefined
  );

  const [questionCount, setQuestionsCount] = useState<number>(0);

  const [scoreCount, setScoreCount] = useState<number>(0);

  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    dispatch(setQuestionType(value));
  };

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
    projQuestions && setCurrentProjection(projQuestions[0]["id"]);
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
        setCurrentProjection(projQuestions[questionCount + 1]["id"]);
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
    { label: "Name", value: "names" },
    { label: "Properties", value: "properties" },
  ];

  const marks: SliderSingleProps["marks"] = {
    5: "5",
    10: "10",
    15: "15",
    20: "20",
  };

  useEffect(() => {
    const projectionKeys = Object.keys(PROJECTIONS);
    const shuffledKeys = projectionKeys.sort(() => Math.random() - 0.5);
    const randomKeys = shuffledKeys.slice(0, questionNumber);
    const randomProjections = randomKeys.map((key) => PROJECTIONS[key]);
    setQuestions(randomProjections as []);
  }, [questionNumber]);

  return (
    <>
      {(() => {
        switch (quizMode) {
          case "start":
            return (
              <div className={styles.quizStart}>
                <span>Type of questions</span>
                <Radio.Group
                  options={options}
                  onChange={onChange}
                  value={questionType}
                  optionType="button"
                  buttonStyle="solid"
                />
                <span>Number of questions</span>
                <div>
                  <Slider
                    defaultValue={10}
                    value={questionNumber}
                    onChange={onQuestionNumberChange}
                    max={20}
                    min={5}
                    marks={marks}
                  />
                  <InputNumber
                    min={5}
                    max={20}
                    style={{ margin: "0 16px" }}
                    value={questionNumber}
                    onChange={onQuestionNumberChange}
                  />
                </div>
                <Button onClick={onButtonClickStart}>Start</Button>
              </div>
            );
          case "questions":
            return (
              <div className={styles.quizStart}>
                <span>
                  Question {questionCount + 1}/{questionNumber}
                </span>
                <h2>This projection is...</h2>
                {projQuestions &&
                  projAnswers?.map((name) => (
                    <Button
                      key={name}
                      onClick={() => handleClick(name)}
                      style={{
                        backgroundColor:
                          clickedButton === name && name === rightAnswer
                            ? "green"
                            : clickedButton === name && name !== rightAnswer
                            ? "red"
                            : "gray",
                        color: "white",
                        padding: "10px",
                        margin: "5px",
                        borderRadius: "5px",
                        border:
                          clickedButton &&
                          clickedButton !== name &&
                          name == rightAnswer
                            ? "5px solid green"
                            : "none",
                        cursor: "pointer",
                      }}
                      disabled={clickedButton ? true : false}
                    >
                      {name}
                    </Button>
                  ))}
                <Button
                  onClick={onButtonClickQuestions}
                  disabled={!clickedButton}
                >
                  {questionCount === questionNumber - 1
                    ? "EndQuiz"
                    : "Next one"}
                </Button>
                <span>Your score: {scoreCount}</span>
              </div>
            );
          case "results":
            return (
              <div className={styles.quizStart}>
                <span>
                  Your score: {scoreCount} / {questionNumber}
                </span>
                <Button onClick={onButtonClick}>Start again</Button>
              </div>
            );
        }
      })()}
    </>
  );
};
