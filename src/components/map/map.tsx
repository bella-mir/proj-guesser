import React, { useState, useEffect } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3-geo";
import { GeoProjection } from "d3";
import Select from "antd/es/select";
import { PROJECTIONS_OPTIONS } from "./map-constants";

export const Carto: React.FC = () => {
  const [projection, setProjection] = useState<GeoProjection>(geoNaturalEarth1);
  const [worldMapData, setWorldMapData] = useState<unknown>(undefined);

  useEffect(() => {
    const fetchWorldMapData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json"
        );
        const data = await response.json();
        setWorldMapData(data);
      } catch (error) {
        console.error("Error fetching world map data:", error);
      }
    };

    fetchWorldMapData();
  }, []);

  const changeProjection = (newProjection: GeoProjection) => {
    setProjection(newProjection);
  };

  const width = 1000;
  const height = 500;

  const pathGenerator = geoPath().projection(projection);
  const graticule = geoGraticule();

  if (!worldMapData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <svg width={width} height={height}>
        {/* Draw world map */}
        <path
          //@ts-expect-error: type error
          d={pathGenerator(graticule())}
          fill="none"
          stroke="#ccc"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          //@ts-expect-error: type error
          d={pathGenerator(worldMapData)}
          fill="#b3daff"
          stroke="#0059b3"
          strokeWidth={0.5}
        />
      </svg>
      <div>
        <Select
          style={{ width: 200 }}
          options={PROJECTIONS_OPTIONS}
          defaultValue={PROJECTIONS_OPTIONS[0].value}
          onChange={(value: GeoProjection) => changeProjection(value)}
        />
      </div>
    </div>
  );
};
