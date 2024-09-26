import { TProjProperty, TProjType } from "../../components/map/map-constants";

export const projectionDescriptions: Record<TProjType, string> = {
  Azimuthal:
    "Azimuthal projections project points from the surface of a sphere onto a plane. They are particularly useful for displaying the poles and local maps, as they preserve directions relative to the central point.",
  Pseudocylindrical:
    "Pseudocylindrical projections represent latitude as horizontal lines and longitude as curved lines. These projections are well-suited for displaying the entire world, as they balance between preserving shapes and sizes.",
  Conic:
    "Conic projections project the Earth's surface onto a cone, which is then unrolled into a plane. These projections are used for maps of mid-latitudes, as they preserve shapes and areas well at these latitudes.",
  Pseudoconical:
    "Pseudoconical projections are similar to conic projections but use curved longitude lines. These projections can display the entire world with less distortion compared to regular conic projections.",
  Cylindrical:
    "Cylindrical projections project the Earth's surface onto a cylinder. The most well-known is the Mercator projection, which preserves shapes well at the equator but significantly distorts sizes at the poles.",
  Pseudoazimuthal:
    "Pseudoazimuthal projections combine the properties of azimuthal and other projection types, allowing for reduced distortions for specific areas or purposes.",
  Retroazimuthal:
    "Retroazimuthal projections preserve exact azimuths (directions) from any point on the map to a specific central point. These projections are often used for aviation and marine navigation.",
  Lenticular:
    "Lenticular projections create a map that resembles a lens or sphere. They use a combination of various projection methods to minimize shape and area distortions.",
  Polyconic:
    "Polyconic projections use a series of cones, each touching the Earth's surface at different latitudes. These projections more accurately represent small areas but are not suitable for global maps.",
  // Trimetric:
  //   "Trimetric projections use three different scales on three different axes. These projections are rarely used and typically applied in specialized cartographic tasks.",
  "Modified azimuthal": "",
  Other:
    "This category includes projections that do not fit into the standard types. These projections may be experimental or adapted for specific needs.",
};

export const projectionPropertyDescriptions: Record<TProjProperty, string> = {
  "Equal-area":
    "Equal-area projections preserve the area of displayed features. This means that the size of any area on the map is proportional to its actual size on the Earth. These projections are useful for statistical and thematic maps.",
  Equidistant:
    "Equidistant projections maintain consistent distances from the center of the projection or along certain lines. These projections are useful for measuring distances but can distort shapes and areas.",
  Perspective:
    "Perspective projections depict the Earth's surface as it would appear from a specific vantage point, such as from space. These projections provide a realistic view but are not suitable for accurate measurements.",
  Conformal:
    "Conformal projections preserve local shapes and angles, making them ideal for navigation and topographic maps. However, they can significantly distort areas, especially over large regions.",
  "Conformal and Perspective":
    "Conformal projections preserve local shapes and angles, making them ideal for navigation and topographic maps. However, they can significantly distort areas, especially over large regions. Perspective projections depict the Earth's surface as it would appear from a specific vantage point, such as from space. These projections provide a realistic view but are not suitable for accurate measurements.",
  Compromise:
    "Compromise projections aim to minimize distortion in shape, area, and distance, without perfectly preserving any of these properties. These projections provide a balanced view, making them suitable for general-purpose world maps.",
  Other:
    "This category includes projections that do not fit into the standard types. These projections may be experimental or adapted for specific needs.",
};
