import { useContext } from "react";
import { MapContext } from "../../mapContext";
import styles from "./info.module.scss";
import { PROJECTIONS, PROJECTIONS_OPTIONS } from "../map/map-constants";
import Select from "antd/es/select";

export const Info = () => {
  const { currentProjection, setCurrentProjection } = useContext(MapContext);

  return (
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
        <span className={styles.title}>
          {PROJECTIONS[currentProjection].name}
        </span>

        <div className={styles.block}>
          <span className={styles.categoryName}>
            {PROJECTIONS[currentProjection].type}
          </span>
          <span>Type description</span>
        </div>
        <div className={styles.block}>
          <span className={styles.categoryName}>
            {" "}
            {PROJECTIONS[currentProjection].property}
          </span>
          <span>Property description</span>
        </div>
      </div>
    </div>
  );
};
