import { useContext, useMemo } from "react";
import styles from "./info.module.scss";
import { PROJECTIONS } from "../../../../components/map/map-constants";
import { LearnContext } from "../../learnContext";

export const Info = () => {
  const { currentProjection } = useContext(LearnContext);

  const currentProjectionInfo = useMemo(() => {
    return PROJECTIONS[currentProjection];
  }, [currentProjection]);

  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span className={styles.category}>Type</span>
          <span className={styles.categoryName}>
            {currentProjectionInfo.type}
          </span>
        </div>
        {/* <span>{PROJECTION_TYPES[currentProjectionInfo.type]}</span> */}
      </div>
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span className={styles.category}>Property</span>
          <span className={styles.categoryName}>
            {currentProjectionInfo.property}
          </span>
        </div>
        {/* <span>{PROJECTIONS_PROPERTIES[currentProjectionInfo.property]}</span> */}
      </div>
    </div>
  );
};
