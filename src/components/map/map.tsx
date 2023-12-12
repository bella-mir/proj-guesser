import * as d3 from "d3";
import { useMapTools } from "../../hooks/useMapTools";
import { setMapProjection } from "../../utils/setMapProjection";

export const Carto = () => {
  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapTools();

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path =
      mapData.data && d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const healthRegions =
      path &&
      path !== null &&
      mapData?.data?.features?.map((data, index) => {
        return <path className="path" d={path(data)} key={index} />;
      });

    return (
      <>
        <svg className="map-canvas">
          <g>{healthRegions}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
