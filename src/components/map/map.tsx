import React, { useState, useEffect, useMemo, useContext } from "react";
import { geoPath, geoGraticule } from "d3-geo";
import { PROJECTIONS } from "./map-constants";
import { MapContext } from "../../mapContext";

export const Carto: React.FC = () => {
  const { currentProjection } = useContext(MapContext);
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

  const projGeo = useMemo(() => {
    return PROJECTIONS[currentProjection]?.projection;
  }, [currentProjection]);

  const width = 1000;
  const height = 500;

  const pathGenerator = geoPath().projection(projGeo);
  const graticule = geoGraticule();

  if (!worldMapData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <svg width={width} height={height}>
          <clipPath id={"clipPathId"}>
            <path
              //@ts-expect-error: type error
              d={pathGenerator({ type: "Sphere" })}
            />
          </clipPath>
          <path
            //@ts-expect-error: type error
            d={pathGenerator(graticule())}
            fill="none"
            stroke="#ccc"
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#clipPathId)"
          />
          <path
            //@ts-expect-error: type error
            d={pathGenerator(worldMapData)}
            fill="#2D4B73"
            stroke="white"
            strokeWidth={0.5}
            clipPath="url(#clipPathId)"
          />
        </svg>
      </div>
    </>
  );
};
