import * as d3 from "d3";
import { useState, useEffect } from "react";
import { FeatureCollection } from "geojson";

export const useMapTools = function () {
  type TMapData = {
    data: FeatureCollection | undefined;
    loading: boolean;
  };

  const [mapData, setMapData] = useState<TMapData>({
    data: undefined,
    loading: true,
  });

  // only fetch map data once and create a tooltip
  useEffect(() => {
    d3.json(
      "https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json"
    )
      .then((data) => {
        setMapData((prevState: TMapData) => {
          return {
            ...prevState,
            data: data as FeatureCollection,
            loading: false,
          };
        });
      })
      .catch((err) => {
        console.log("error occurred with loading map", err);
      });

    /// tooltip creation
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
    ///
  }, []);

  return { mapData };
};
