import * as d3 from "d3";
import { FeatureCollection } from "geojson";

export const setMapProjection = function (mapData: FeatureCollection) {
  // use the geoAlbers map projection
  const projection = d3.geoTransverseMercator();
  // adjust projection to fit area of map canvas
  projection.precision(0).fitExtent(
    [
      [0, 0],
      [960, 480],
    ],
    mapData
  );
  return projection;
};
