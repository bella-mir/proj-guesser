import { Carto } from "../../components";
import { PROJECTIONS_OPTIONS } from "../../components/map/map-constants";
import styles from "./carouselPage.module.scss";

export const CarouselPage = () => {
  return (
    <div className={styles.page}>
      {PROJECTIONS_OPTIONS.map((projection) => (
        <div key={projection.value} className={styles.projectionContainer}>
          <div className={styles.projectionTitle}>{projection.label}</div>
          <div className={styles.projectionMap}>
            <Carto currentProjection={projection.value} scale={3} />
          </div>
        </div>
      ))}
    </div>
  );
};
