import { useMemo, useState } from "react";
import { LearnContext } from "./learnContext";
import styles from "./mainPage.module.scss";
import { Button, Select } from "antd";
import { PROJECTIONS_OPTIONS } from "../../components/map/map-constants";
import { Info } from "./components";
import { Carto } from "../../components";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export const MainPage = () => {
  const [currentProjection, setCurrentProjection] = useState("bonne");

  const rightDisabled = useMemo(() => {
    const index = PROJECTIONS_OPTIONS.findIndex(
      (option) => option.value === currentProjection
    );

    if (index == -1 || index == PROJECTIONS_OPTIONS.length - 1) {
      return true;
    }
  }, [currentProjection]);

  const leftDisabled = useMemo(() => {
    const index = PROJECTIONS_OPTIONS.findIndex(
      (option) => option.value === currentProjection
    );

    if (index == 0) {
      return true;
    }
  }, [currentProjection]);

  const getNextProjectionKey = (currentKey: string) => {
    const index = PROJECTIONS_OPTIONS.findIndex(
      (option) => option.value === currentKey
    );
    if (index !== -1 && index < PROJECTIONS_OPTIONS.length - 1) {
      return PROJECTIONS_OPTIONS[index + 1].value;
    } else {
      return null;
    }
  };

  const getPreviousProjectionKey = (currentKey: string) => {
    const index = PROJECTIONS_OPTIONS.findIndex(
      (option) => option.value === currentKey
    );
    if (index > 0) {
      return PROJECTIONS_OPTIONS[index - 1].value;
    } else {
      return null;
    }
  };

  const onLeftClick = () => {
    const nextProjection = getPreviousProjectionKey(currentProjection);

    if (nextProjection !== null) {
      setCurrentProjection(nextProjection);
    }
  };

  const onRightClick = () => {
    const nextProjection = getNextProjectionKey(currentProjection);

    if (nextProjection !== null) {
      setCurrentProjection(nextProjection);
    }
  };

  return (
    <>
      <LearnContext.Provider
        value={{ currentProjection, setCurrentProjection }}
      >
        <div className={styles.page}>
          <div>
            <Select
              options={PROJECTIONS_OPTIONS}
              value={currentProjection}
              onChange={(value: string) => setCurrentProjection(value)}
              size="large"
              className={styles.selector}
            />
            <div className={styles.arrows}>
              <Button
                type="link"
                icon={<LeftCircleOutlined />}
                onClick={onLeftClick}
                disabled={leftDisabled}
                size="large"
              ></Button>
              <Button
                type="link"
                icon={<RightCircleOutlined />}
                onClick={onRightClick}
                disabled={rightDisabled}
                size="large"
              ></Button>
            </div>
          </div>
          {/* <Switcher /> */}
          <Info />
          <div className={styles.map}>
            <Carto currentProjection={currentProjection} />
          </div>
        </div>
      </LearnContext.Provider>
    </>
  );
};
