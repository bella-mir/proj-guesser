import * as d3 from "d3";
import { GeoProjection } from "d3";
//@ts-expect-error: no types
import * as d3proj from "d3-geo-projection";

export type TProjType =
  | "Azimuthal"
  | "Pseudocylindrical"
  | "Conic"
  | "Pseudoconical"
  | "Cylindrical"
  | "Pseudoazimuthal"
  | "Retroazimuthal"
  | "Lenticular"
  | "Polyconic"
  | "Trimetric"
  | "Other";

export type TProjProperty =
  | "Equal-area"
  | "Equidistant"
  | "Perspective"
  | "Conformal"
  | "Compromise"
  | "Gnomonic"
  | "Other";

export type TProj = {
  id: string;
  name: string;
  projection: GeoProjection;
  type: TProjType;
  property: TProjProperty;
};

interface IProjectionCollection {
  [key: string]: TProj;
}

export const PROJECTIONS: IProjectionCollection = {
  azimuthalequalarea: {
    id: "azimuthalequalarea",
    name: "Azimuthal Equal Area",
    projection: d3.geoAzimuthalEqualArea(),
    type: "Azimuthal",
    property: "Equal-area",
  },
  azimuthalequidistant: {
    id: "azimuthalequidistant",
    name: "Azimuthal Equidistant",
    projection: d3.geoAzimuthalEquidistant(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  gnomonic: {
    id: "gnomonic",
    name: "Gnomonic",
    projection: d3.geoGnomonic(),
    type: "Azimuthal",
    property: "Gnomonic",
  },
  orthographic: {
    id: "orthographic",
    name: "Orthographic",
    projection: d3.geoOrthographic(),
    type: "Azimuthal",
    property: "Perspective",
  },
  stereographic: {
    id: "stereographic",
    name: "Stereographic",
    projection: d3.geoStereographic(),
    type: "Azimuthal",
    property: "Conformal",
  },
  equalearth: {
    id: "equalearth",
    name: "Equal Earth",
    projection: d3.geoEqualEarth(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  albersusa: {
    id: "albersusa",
    name: "Albers Usa",
    projection: d3.geoAlbersUsa(),
    type: "Conic",
    property: "Equal-area",
  },
  albers: {
    id: "albers",
    name: "Albers",
    projection: d3.geoAlbers(),
    type: "Conic",
    property: "Equal-area",
  },
  conicequalarea: {
    id: "conicequalarea",
    name: "Conic Equal Area",
    projection: d3.geoConicEqualArea(),
    type: "Conic",
    property: "Equal-area",
  },
  conicequidistant: {
    id: "conicequidistant",
    name: "Conic Equidistant",
    projection: d3.geoConicEquidistant(),
    type: "Conic",
    property: "Equidistant",
  },
  equirectangular: {
    id: "equirectangular",
    name: "Equirectangular",
    projection: d3.geoEquirectangular(),
    type: "Cylindrical",
    property: "Equidistant",
  },
  mercator: {
    id: "mercator",
    name: "Mercator",
    projection: d3.geoMercator(),
    type: "Cylindrical",
    property: "Conformal",
  },
  transversemercator: {
    id: "transversemercator",
    name: "Transverse Mercator",
    projection: d3.geoTransverseMercator(),
    type: "Cylindrical",
    property: "Conformal",
  },
  naturalearth1: {
    id: "naturalearth1",
    name: "Natural Earth1",
    projection: d3.geoNaturalEarth1(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  airy: {
    id: "airy",
    name: "Airy",
    projection: d3proj.geoAiry(),
    type: "Azimuthal",
    property: "Compromise",
  },
  aitoff: {
    id: "aitoff",
    name: "Aitoff",
    projection: d3proj.geoAitoff(),
    type: "Pseudoazimuthal",
    property: "Compromise",
  },
  armadillo: {
    id: "armadillo",
    name: "Armadillo",
    projection: d3proj.geoArmadillo(),
    type: "Other",
    property: "Compromise",
  },
  august: {
    id: "august",
    name: "August",
    projection: d3proj.geoAugust(),
    type: "Other",
    property: "Conformal",
  },
  baker: {
    id: "baker",
    name: "Baker",
    projection: d3proj.geoBaker(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  berghaus: {
    id: "berghaus",
    name: "Berghaus",
    projection: d3proj.geoBerghaus(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  bertin1953: {
    id: "bertin1953",
    name: "Bertin1953",
    projection: d3proj.geoBertin1953(),
    type: "Other",
    property: "Compromise",
  },
  boggs: {
    id: "boggs",
    name: "Boggs",
    projection: d3proj.geoBoggs(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  bonne: {
    id: "bonne",
    name: "Bonne",
    projection: d3proj.geoBonne(),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  bottomley: {
    id: "bottomley",
    name: "Bottomley",
    projection: d3proj.geoBottomley(),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  bromley: {
    id: "bromley",
    name: "Bromley",
    projection: d3proj.geoBromley(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  chamberlinafrica: {
    id: "chamberlinafrica",
    name: "Chamberlin Africa",
    projection: d3proj.geoChamberlinAfrica(),
    type: "Trimetric",
    property: "Other",
  },
  collignon: {
    id: "collignon",
    name: "Collignon",
    projection: d3proj.geoCollignon(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  craig: {
    id: "craig",
    name: "Craig",
    projection: d3proj.geoCraig(),
    type: "Retroazimuthal",
    property: "Compromise",
  },
  craster: {
    id: "craster",
    name: "Craster",
    projection: d3proj.geoCraster(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  cylindricalequalarea: {
    id: "cylindricalequalarea",
    name: "CylindricalEqualArea",
    projection: d3proj.geoCylindricalEqualArea(),
    type: "Cylindrical",
    property: "Equal-area",
  },
  cylindricalstereographic: {
    id: "cylindricalstereographic",
    name: "CylindricalStereographic",
    projection: d3proj.geoCylindricalStereographic(),
    type: "Cylindrical",
    property: "Conformal",
  },
  eckert1: {
    id: "eckert1",
    name: "Eckert1",
    projection: d3proj.geoEckert1(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert2: {
    id: "eckert2",
    name: "Eckert2",
    projection: d3proj.geoEckert2(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert3: {
    id: "eckert3",
    name: "Eckert3",
    projection: d3proj.geoEckert3(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert4: {
    id: "eckert4",
    name: "Eckert4",
    projection: d3proj.geoEckert4(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert5: {
    id: "eckert5",
    name: "Eckert5",
    projection: d3proj.geoEckert5(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert6: {
    id: "eckert6",
    name: "Eckert6",
    projection: d3proj.geoEckert6(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eisenlohr: {
    id: "eisenlohr",
    name: "Eisenlohr",
    projection: d3proj.geoEisenlohr(),
    type: "Other",
    property: "Conformal",
  },
  fahey: {
    id: "fahey",
    name: "Fahey",
    projection: d3proj.geoFahey(),
    type: "Pseudocylindrical",
    property: "Other",
  },
  foucaut: {
    id: "foucaut",
    name: "Foucaut",
    projection: d3proj.geoFoucaut(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  foucautsinusoidal: {
    id: "foucautsinusoidal",
    name: "Foucaut Sinusoidal",
    projection: d3proj.geoFoucautSinusoidal(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  gingery: {
    id: "gingery",
    name: "Gingery",
    projection: d3proj.geoGingery(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  ginzburg4: {
    id: "ginzburg4",
    name: "Ginzburg4",
    projection: d3proj.geoGinzburg4(),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg5: {
    id: "ginzburg5",
    name: "Ginzburg5",
    projection: d3proj.geoGinzburg5(),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg6: {
    id: "ginzburg6",
    name: "Ginzburg6",
    projection: d3proj.geoGinzburg6(),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg8: {
    id: "ginzburg8",
    name: "Ginzburg8",
    projection: d3proj.geoGinzburg8(),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg9: {
    id: "ginzburg9",
    name: "Ginzburg9",
    projection: d3proj.geoGinzburg9(),
    type: "Lenticular",
    property: "Compromise",
  },
  gringorten: {
    id: "gringorten",
    name: "Gringorten",
    projection: d3proj.geoGringorten(),
    type: "Other",
    property: "Equal-area",
  },
  guyou: {
    id: "guyou",
    name: "Guyou",
    projection: d3proj.geoGuyou(),
    type: "Other",
    property: "Conformal",
  },
  hammer: {
    id: "hammer",
    name: "Hammer",
    projection: d3proj.geoHammer(),
    type: "Pseudoazimuthal",
    property: "Equal-area",
  },
  hammerretroazimuthal: {
    id: "hammerretroazimuthal",
    name: "Hammer Retroazimuthal",
    projection: d3proj.geoHammerRetroazimuthal(),
    type: "Retroazimuthal",
    property: "Other",
  },
  healpix: {
    id: "healpix",
    name: "Healpix",
    projection: d3proj.geoHealpix(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hill: {
    id: "hill",
    name: "Hill",
    projection: d3proj.geoHill(),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  homolosine: {
    id: "homolosine",
    name: "Homolosine",
    projection: d3proj.geoHomolosine(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hufnagel: {
    id: "hufnagel",
    name: "Hufnagel",
    projection: d3proj.geoHufnagel(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hyperelliptical: {
    id: "hyperelliptical",
    name: "Hyperelliptical",
    projection: d3proj.geoHyperelliptical(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  kavrayskiy7: {
    id: "kavrayskiy7",
    name: "Kavrayskiy7",
    projection: d3proj.geoKavrayskiy7(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  lagrange: {
    id: "lagrange",
    name: "Lagrange",
    projection: d3proj.geoLagrange(),
    type: "Other",
    property: "Conformal",
  },
  larrivee: {
    id: "larrivee",
    name: "Larrivee",
    projection: d3proj.geoLarrivee(),
    type: "Other",
    property: "Compromise",
  },
  laskowski: {
    id: "laskowski",
    name: "Laskowski",
    projection: d3proj.geoLaskowski(),
    type: "Other",
    property: "Compromise",
  },
  loximuthal: {
    id: "loximuthal",
    name: "Loximuthal",
    projection: d3proj.geoLoximuthal(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  miller: {
    id: "miller",
    name: "Miller",
    projection: d3proj.geoMiller(),
    type: "Cylindrical",
    property: "Compromise",
  },
  modifiedstereographicalaska: {
    id: "modifiedstereographicalaska",
    name: "Modified Stereographic Alaska",
    projection: d3proj.geoModifiedStereographicAlaska(),
    type: "Azimuthal",
    property: "Conformal",
  },
  modifiedstereographicgs48: {
    id: "modifiedstereographicgs48",
    name: "Modified Stereographic Gs48",
    projection: d3proj.geoModifiedStereographicGs48(),
    type: "Azimuthal",
    property: "Conformal",
  },
  modifiedstereographicgs50: {
    id: "modifiedstereographicgs50",
    name: "Modified Stereographic Gs50",
    projection: d3proj.geoModifiedStereographicGs50(),
    type: "Azimuthal",
    property: "Conformal",
  },
  modifiedstereographicmiller: {
    id: "modifiedstereographicmiller",
    name: "Modified Stereographic Miller",
    projection: d3proj.geoModifiedStereographicMiller(),
    type: "Azimuthal",
    property: "Conformal",
  },
  modifiedstereographiclee: {
    id: "modifiedstereographiclee",
    name: "Modified Stereographic Lee",
    projection: d3proj.geoModifiedStereographicLee(),
    type: "Azimuthal",
    property: "Conformal",
  },
  mollweide: {
    id: "mollweide",
    name: "Mollweide",
    projection: d3proj.geoMollweide(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarparabolic: {
    id: "mtflatpolarparabolic",
    name: "Mt Flat Polar Parabolic",
    projection: d3proj.geoMtFlatPolarParabolic(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarquartic: {
    id: "mtflatpolarquartic",
    name: "Mt Flat Polar Quartic",
    projection: d3proj.geoMtFlatPolarQuartic(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarsinusoidal: {
    id: "mtflatpolarsinusoidal",
    name: "Mt Flat Polar Sinusoidal",
    projection: d3proj.geoMtFlatPolarSinusoidal(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  naturalearth2: {
    id: "naturalearth2",
    name: "Natural Earth 2",
    projection: d3proj.geoNaturalEarth2(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  nellhammer: {
    id: "nellhammer",
    name: "Nell Hammer",
    projection: d3proj.geoNellHammer(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  nicolosi: {
    id: "nicolosi",
    name: "Nicolosi",
    projection: d3proj.geoNicolosi(),
    type: "Pseudoconical",
    property: "Compromise",
  },
  patterson: {
    id: "patterson",
    name: "Patterson",
    projection: d3proj.geoPatterson(),
    type: "Cylindrical",
    property: "Compromise",
  },
  polyconic: {
    id: "polyconic",
    name: "Polyconic",
    projection: d3proj.geoPolyconic(),
    type: "Polyconic",
    property: "Other",
  },
  rectangularpolyconic: {
    id: "rectangularpolyconic",
    name: "Rectangular Polyconic",
    projection: d3proj.geoRectangularPolyconic(),
    type: "Polyconic",
    property: "Other",
  },
  robinson: {
    id: "robinson",
    name: "Robinson",
    projection: d3proj.geoRobinson(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  satellite: {
    id: "satellite",
    name: "Satellite",
    projection: d3proj.geoSatellite(),
    type: "Other",
    property: "Other",
  },
  sinusoidal: {
    id: "sinusoidal",
    name: "Sinusoidal",
    projection: d3proj.geoSinusoidal(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  sinumollweide: {
    id: "sinumollweide",
    name: "Sinu Mollweide",
    projection: d3proj.geoSinuMollweide(),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  times: {
    id: "times",
    name: "Times",
    projection: d3proj.geoTimes(),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  twopointazimuthalusa: {
    id: "twopointazimuthalusa",
    name: "Two Point Azimuthal Usa",
    projection: d3proj.geoTwoPointAzimuthalUsa(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  vandergrinten2: {
    id: "vandergrinten2",
    name: "Van Der Grinten 2",
    projection: d3proj.geoVanDerGrinten2(),
    type: "Other",
    property: "Compromise",
  },
  vandergrinten3: {
    id: "vandergrinten3",
    name: "Van Der Grinten 3",
    projection: d3proj.geoVanDerGrinten3(),
    type: "Other",
    property: "Compromise",
  },
  wagner: {
    id: "wagner",
    name: "Wagner",
    projection: d3proj.geoWagner(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  wiechel: {
    id: "wiechel",
    name: "Wiechel",
    projection: d3proj.geoWiechel(),
    type: "Azimuthal",
    property: "Equidistant",
  },
  winkel3: {
    id: "winkel3",
    name: "Winkel3",
    projection: d3proj.geoWinkel3(),
    type: "Pseudoazimuthal",
    property: "Compromise",
  },
};

export const PROJECTIONS_OPTIONS = Object.entries(PROJECTIONS).map(
  ([key, projection]) => ({
    label: projection.name,
    value: key,
  })
);

// export const PROJECTION_TYPES: { [K in TProjType]: string } = {
//   Azimuthal:
//     "Azimuthal projections maintain accurate directionality from the center point of the projection. They are commonly used for maps centered on a specific location, such as polar maps or maps centered on a specific country or continent.",
//   Pseudocylindrical:
//     "Pseudocylindrical projections preserve either area or distance along the equator while distorting both as you move away from it. They are often used for world maps where accurate representation of areas is desired.",
//   Conic:
//     "Conic projections are made by placing a cone over the Earth and projecting the surface onto it. They are particularly useful for mapping mid-latitude regions with minimal distortion.",
//   Cylindrical:
//     "Cylindrical projections project the Earth's surface onto a cylinder. They are commonly used for world maps because they result in straight, horizontal lines of latitude and longitude.",
//   Pseudoazimuthal:
//     "Pseudoazimuthal projections maintain accurate directionality from one or two points on the map. They are often used for maps of large regions or continents.",
//   Other:
//     "This category includes projections that do not fit neatly into any of other categories or have unique properties.",
// };

export const PROJECTION_TYPES: { [K in TProjType]: string } = {
  Azimuthal:
    "Azimuthal projections maintain accurate directionality from the center point of the projection. They are commonly used for maps centered on a specific location, such as polar maps or maps centered on a specific country or continent.",
  Pseudocylindrical:
    "Pseudocylindrical projections preserve either area or distance along the equator while distorting both as you move away from it. They are often used for world maps where accurate representation of areas is desired.",
  Conic:
    "Conic projections are made by placing a cone over the Earth and projecting the surface onto it. They are particularly useful for mapping mid-latitude regions with minimal distortion.",
  Cylindrical:
    "Cylindrical projections project the Earth's surface onto a cylinder. They are commonly used for world maps because they result in straight, horizontal lines of latitude and longitude.",
  Pseudoazimuthal:
    "Pseudoazimuthal projections maintain accurate directionality from one or two points on the map. They are often used for maps of large regions or continents.",
  Pseudoconical:
    "Pseudoconical projections maintain accurate directionality along specific lines or from particular points on the map. They combine aspects of both azimuthal and conic projections.",
  Retroazimuthal:
    "Retroazimuthal projections preserve accurate directionality from one or more selected points to all other points on the map. They are commonly used for navigational and military purposes.",
  Lenticular:
    "Lenticular projections are a type of pseudocylindrical projection that seeks to minimize distortion across the map by curving the meridians and parallels.",
  Polyconic:
    "Polyconic projections are characterized by straight meridians and curved parallels. They are commonly used for mapping large regions or countries with significant east-west extent.",
  Trimetric:
    "Trimetric projections are a type of trimetric projection characterized by the use of three different scales for the three principal directions. They are often used for specialized mapping purposes where specific areas or features require accurate representation.",
  Other:
    "This category includes projections that do not fit neatly into any of other categories or have unique properties.",
};

export const PROJECTIONS_PROPERTIES: { [K in TProjProperty]: string } = {
  "Equal-area": "Preserves relative sizes of areas on the map.",
  Equidistant:
    "Preserves distances along certain lines or from certain points.",
  Perspective:
    "Simulates a three-dimensional perspective view of the Earth's surface.",
  Conformal: "Preserves local shapes or angles.",
  Compromise:
    "Aims to balance various properties such as area, distance, and shape distortion.",
  Gnomonic:
    "The Gnomonic projection projects the Earth's surface onto a tangent plane from a single point, typically the center of the Earth. It is known for preserving great circles as straight lines, making it useful for navigational purposes but resulting in significant distortion away from the center point.",
  Other:
    "Projections that don't fall into the above categories or have unique characteristics.",
};
