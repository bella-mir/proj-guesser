import { useMemo } from "react";
import { geoPath, geoGraticule } from "d3-geo";
import { PROJECTIONS } from "./map-constants";
import landData from "../../data/land.json";

export const Carto = ({ currentProjection }: { currentProjection: string }) => {
  const projGeo = useMemo(() => {
    return PROJECTIONS[currentProjection]?.projection
      .scale(100)
      .translate([250, 150]);
  }, [currentProjection]);

  const width = 500;
  const height = 400;

  const pathGenerator = geoPath().projection(projGeo);
  const graticule = geoGraticule();

  return (
    <>
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
          d={pathGenerator(landData)}
          fill="#2D4B73"
          stroke="white"
          strokeWidth={0.5}
          clipPath="url(#clipPathId)"
        />
      </svg>
    </>
  );
};
