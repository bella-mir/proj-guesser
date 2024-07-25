import { useMemo } from "react";
import { geoPath, geoGraticule } from "d3-geo";
import { PROJECTIONS } from "./map-constants";
import landData from "../../data/land.json";

export const Carto = ({
  currentProjection,
  scale = 1,
}: {
  currentProjection: string;
  scale?: number;
}) => {
  const projGeo = useMemo(() => {
    return PROJECTIONS[currentProjection]?.projection.translate([275, 200]);
  }, [currentProjection]);

  const width = 550 / scale;
  const height = 400 / scale;

  const pathGenerator = geoPath().projection(projGeo);
  const graticule = geoGraticule();

  const svgStyle = {
    verticalAlign: "top", // Align elements to the top
  };

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        style={svgStyle}
      >
        <clipPath id={"clipPathId"}>
          <path
            //@ts-expect-error: type error
            d={pathGenerator({ type: "Sphere" })}
          />
        </clipPath>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="#D8E3F2"
          clipPath="url(#clipPathId)"
        />
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
          strokeWidth={0.2}
          clipPath="url(#clipPathId)"
        />
      </svg>
    </>
  );
};
