import { useId, useMemo } from "react";
import { geoPath, geoGraticule } from "d3-geo";
import { PROJECTIONS } from "./map-constants";
import landData from "../../data/land.json";

export const Carto = ({
  currentProjection = "bonne",
  scale = 1,
}: {
  currentProjection?: string;
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
    verticalAlign: "top",
    // transform: `scale(${1 / scale})`,
    transformOrigin: "0 0",
  };

  const clipPathId = useId();

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        style={svgStyle}
      >
        <g transform={`scale(${1 / scale})`}>
          <clipPath id={clipPathId}>
            <path
              //@ts-expect-error: type error
              d={pathGenerator({ type: "Sphere" })}
            />
          </clipPath>
          <rect
            x={0}
            y={0}
            width={width * scale}
            height={height * scale}
            // fill="#D8DCF2"
            fill="#D8E1F2"
            clipPath={`url(#${clipPathId})`}
          />
          <path
            //@ts-expect-error: type error
            d={pathGenerator(graticule())}
            fill="none"
            stroke="white"
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath={`url(#${clipPathId})`}
          />
          <path
            //@ts-expect-error: type error
            d={pathGenerator(landData)}
            // fill="#454F8C"
            fill="#455F8C"
            stroke="white"
            strokeWidth={0.2}
            clipPath={`url(#${clipPathId})`}
          />
        </g>
      </svg>
    </>
  );
};
