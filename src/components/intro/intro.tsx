import styles from "./intro.module.scss";
import Radio, { RadioChangeEvent } from "antd/es/radio";
import { useAppDispatch } from "../../app/app-types";
import { setAppMode, setQuizMode } from "../../app/app-actions";
import { useSelector } from "react-redux";
import { getAppMode } from "../../app/app-selectors";

export const Intro = () => {
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
    <>
      <h1 className={styles.title}>Map Projections</h1>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={appMode}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};
