// import * as d3 from "d3";
// import { useMapTools } from "../../hooks/useMapTools";
// import styles from "./map.module.scss";
// import { setMapProjection } from "../../utils/setMapProjection";
// // import { setMapProjection } from "../../utils/setMapProjection";

// export const Carto = () => {
//   // step 1: load geoJSON and create tooltip
//   const { mapData } = useMapTools();
//   const sphere: d3.GeoPermissibleObjects = { type: "Sphere" };

//   // render map only when map data is fully loaded
//   if (!mapData.loading) {
//     // step 2: render the regions
//     // compute a path function based on correct projections that we will use later
//     const path =
//       mapData.data && d3.geoPath().projection(setMapProjection(mapData.data));

//     const graticule = d3.geoGraticule();

//     if (!path || path == null) {
//       return;
//     }
//     // for each geoJSON coordinate, compute and pass in the equivalent svg path
//     const healthRegions = mapData?.data?.features?.map((data, index) => {
//       return <path className="path" d={path(data) as string} key={index} />;
//     });

//     return (
//       <>
//         <svg width="900px" height="500px">
//           <path className={styles.sphere} d={path(sphere)} />
//           <path className={styles.graticule} d={path(graticule)}></path>
//           {healthRegions}
//         </svg>
//       </>
//     );
//   } else {
//     return <h1>Loading...</h1>;
//   }
// };
import React, { useState, useEffect } from "react";
import { geoNaturalEarth1, geoOrthographic, geoPath } from "d3-geo";

export const Carto: React.FC = () => {
  const [projection, setProjection] = useState<any>(geoNaturalEarth1);
  const [worldMapData, setWorldMapData] = useState<any>(null);

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

  const changeProjection = (newProjection: any) => {
    setProjection(newProjection);
  };

  const width = 800;
  const height = 500;

  const pathGenerator = geoPath().projection(projection);

  if (!worldMapData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <svg width={width} height={height}>
        {/* Draw world map */}
        <path
          d={pathGenerator(worldMapData)}
          fill="#b3daff"
          stroke="#0059b3"
          strokeWidth={0.5}
        />
      </svg>
      <div>
        <button onClick={() => changeProjection(geoNaturalEarth1)}>
          Natural Earth
        </button>
        <button onClick={() => changeProjection(geoOrthographic)}>
          Orthographic
        </button>
      </div>
    </div>
  );
};
