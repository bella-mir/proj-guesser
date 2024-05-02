import { useState } from "react";
import { LearnContext } from "./learnContext";
import { Carto, Info } from "../../components";
import styles from "./learnMode.module.scss";
import { Select } from "antd";
import { PROJECTIONS_OPTIONS } from "../../components/map/map-constants";

export const LearnMode = () => {
  const [currentProjection, setCurrentProjection] = useState("equalearth");
  return (
    <>
      <LearnContext.Provider
        value={{ currentProjection, setCurrentProjection }}
      >
        <Select
          options={PROJECTIONS_OPTIONS}
          defaultValue={currentProjection}
          onChange={(value: string) => setCurrentProjection(value)}
          size="large"
          className={styles.selector}
        />
        <div className={styles.content}>
          <div className={styles.map}>
            <Carto currentProjection={currentProjection} />
          </div>
          <div className={styles.info}>
            <Info />
          </div>
        </div>
      </LearnContext.Provider>
    </>
  );
};
