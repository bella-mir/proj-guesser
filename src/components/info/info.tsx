import { useContext, useMemo } from "react";
import { MapContext } from "../../mapContext";
import styles from "./info.module.scss";
import {
  PROJECTIONS,
  PROJECTIONS_OPTIONS,
  PROJECTIONS_PROPERTIES,
  PROJECTION_TYPES,
} from "../map/map-constants";
import Select from "antd/es/select";
import { useSelector } from "react-redux";
import { getAppMode } from "../../app/app-selectors";
import { QuizMode } from "./componenets";

export const Info = () => {
  const appMode = useSelector(getAppMode);
  const { currentProjection, setCurrentProjection } = useContext(MapContext);

  const currentProjectionInfo = useMemo(() => {
    return PROJECTIONS[currentProjection];
  }, [currentProjection]);

  return (
    <>
      {appMode == "learn" ? (
        <div>
          <div>
            <Select
              style={{ width: 200 }}
              options={PROJECTIONS_OPTIONS}
              defaultValue={currentProjection}
              onChange={(value: string) => setCurrentProjection(value)}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.title}>{currentProjectionInfo.name}</span>

            <div className={styles.block}>
              <span className={styles.categoryName}>
                {currentProjectionInfo.name}
              </span>
              <span>{PROJECTION_TYPES[currentProjectionInfo.type]}</span>
            </div>
            <div className={styles.block}>
              <span className={styles.categoryName}>
                {currentProjectionInfo.property}
              </span>
              <span>
                {PROJECTIONS_PROPERTIES[currentProjectionInfo.property]}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <QuizMode />
      )}
    </>
  );
};
