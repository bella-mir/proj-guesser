import { useState } from "react";
import { LearnContext } from "./learnContext";
import styles from "./learnPage.module.scss";
import { Select } from "antd";
import { PROJECTIONS_OPTIONS } from "../../components/map/map-constants";
import { Info } from "./components";
import { Carto } from "../../components";

export const LearnPage = () => {
  const [currentProjection, setCurrentProjection] = useState("bonne");

  return (
    <>
      <LearnContext.Provider
        value={{ currentProjection, setCurrentProjection }}
      >
        <div className={styles.page}>
          <Select
            options={PROJECTIONS_OPTIONS}
            defaultValue={currentProjection}
            onChange={(value: string) => setCurrentProjection(value)}
            size="large"
            className={styles.selector}
          />
          <Info />
          <Carto currentProjection={currentProjection} />
        </div>
      </LearnContext.Provider>
    </>
  );
};
