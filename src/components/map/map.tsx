import * as d3 from "d3";
import { useMapTools } from "../../hooks/useMapTools";
import styles from "./map.module.scss";
import { setMapProjection } from "../../utils/setMapProjection";
// import { setMapProjection } from "../../utils/setMapProjection";

export const Carto = () => {
  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapTools();
  const sphere: d3.GeoPermissibleObjects = { type: "Sphere" };

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path =
      mapData.data && d3.geoPath().projection(setMapProjection(mapData.data));

    const graticule = d3.geoGraticule();

    if (!path || path == null) {
      return;
    }
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const healthRegions = mapData?.data?.features?.map((data, index) => {
      return <path className="path" d={path(data) as string} key={index} />;
    });

    return (
      <>
        <svg width="900px" height="500px">
          <path className={styles.sphere} d={path(sphere)} />
          <path className={styles.graticule} d={path(graticule)}></path>
          {healthRegions}
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
