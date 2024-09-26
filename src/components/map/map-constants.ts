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
  | "Modified azimuthal"
  | "Lenticular"
  | "Polyconic"
  // | "Trimetric"
  | "Other";

export type TProjProperty =
  | "Equal-area"
  | "Equidistant"
  | "Perspective"
  | "Conformal"
  | "Conformal and Perspective"
  | "Equal-area and Perspective"
  | "Compromise"
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
    projection: d3.geoAzimuthalEqualArea().scale(100),
    type: "Azimuthal",
    property: "Equal-area",
  },
  azimuthalequidistant: {
    id: "azimuthalequidistant",
    name: "Azimuthal Equidistant",
    projection: d3.geoAzimuthalEquidistant().scale(70),
    type: "Azimuthal",
    property: "Equidistant",
  },
  gnomonic: {
    id: "gnomonic",
    name: "Gnomonic",
    projection: d3.geoGnomonic().scale(110),
    type: "Azimuthal",
    property: "Perspective",
  },
  orthographic: {
    id: "orthographic",
    name: "Orthographic",
    projection: d3.geoOrthographic().scale(180),
    type: "Azimuthal",
    property: "Perspective",
  },
  stereographic: {
    id: "stereographic",
    name: "Stereographic",
    projection: d3.geoStereographic().scale(70),
    type: "Azimuthal",
    property: "Conformal and Perspective",
  },
  equalearth: {
    id: "equalearth",
    name: "Equal Earth",
    projection: d3.geoEqualEarth().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  // albersusa: {
  //   id: "albersusa",
  //   name: "Albers Usa",
  //   projection: d3.geoAlbersUsa(),
  //   type: "Conic",
  //   property: "Equal-area",
  // },
  albers: {
    id: "albers",
    name: "Albers",
    projection: d3.geoAlbers().scale(100),
    type: "Conic",
    property: "Equal-area",
  },
  conicequalarea: {
    id: "conicequalarea",
    name: "Conic Equal Area",
    projection: d3.geoConicEqualArea().scale(90),
    type: "Conic",
    property: "Equal-area",
  },
  conicequidistant: {
    id: "conicequidistant",
    name: "Conic Equidistant",
    projection: d3.geoConicEquidistant().scale(80),
    type: "Conic",
    property: "Equidistant",
  },
  equirectangular: {
    id: "equirectangular",
    name: "Equirectangular",
    projection: d3.geoEquirectangular().scale(80),
    type: "Cylindrical",
    property: "Equidistant",
  },
  mercator: {
    id: "mercator",
    name: "Mercator",
    projection: d3.geoMercator().scale(80),
    type: "Cylindrical",
    property: "Conformal",
  },
  transversemercator: {
    id: "transversemercator",
    name: "Transverse Mercator",
    projection: d3.geoTransverseMercator().scale(100),
    type: "Cylindrical",
    property: "Conformal",
  },
  naturalearth1: {
    id: "naturalearth1",
    name: "Natural Earth1",
    projection: d3.geoNaturalEarth1().scale(100),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  airy: {
    id: "airy",
    name: "Airy",
    projection: d3proj.geoAiry().scale(80),
    type: "Azimuthal",
    property: "Compromise",
  },
  aitoff: {
    id: "aitoff",
    name: "Aitoff",
    projection: d3proj.geoAitoff().scale(85),
    type: "Lenticular",
    property: "Compromise",
  },
  armadillo: {
    id: "armadillo",
    name: "Armadillo",
    projection: d3proj.geoArmadillo().scale(110),
    type: "Other",
    property: "Compromise",
  },
  august: {
    id: "august",
    name: "August",
    projection: d3proj.geoAugust().scale(100),
    type: "Other",
    property: "Conformal",
  },
  baker: {
    id: "baker",
    name: "Baker",
    projection: d3proj.geoBaker().scale(90),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  berghaus: {
    id: "berghaus",
    name: "Berghaus",
    projection: d3proj.geoBerghaus().scale(70),
    type: "Modified azimuthal",
    property: "Equidistant",
  },
  bertin1953: {
    id: "bertin1953",
    name: "Bertin1953",
    projection: d3proj.geoBertin1953().scale(120),
    type: "Other",
    property: "Compromise",
  },
  boggs: {
    id: "boggs",
    name: "Boggs",
    projection: d3proj.geoBoggs().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  bonne: {
    id: "bonne",
    name: "Bonne",
    projection: d3proj.geoBonne().scale(98),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  bottomley: {
    id: "bottomley",
    name: "Bottomley",
    projection: d3proj.geoBottomley().scale(100),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  bromley: {
    id: "bromley",
    name: "Bromley",
    projection: d3proj.geoBromley().scale(85),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  chamberlinafrica: {
    id: "chamberlinafrica",
    name: "Chamberlin Africa",
    projection: d3proj.geoChamberlinAfrica().scale(120),
    type: "Modified azimuthal",
    property: "Other",
  },
  collignon: {
    id: "collignon",
    name: "Collignon",
    projection: d3proj.geoCollignon().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  craig: {
    id: "craig",
    name: "Craig",
    projection: d3proj.geoCraig().scale(150),
    type: "Modified azimuthal",
    property: "Compromise",
  },
  craster: {
    id: "craster",
    name: "Craster",
    projection: d3proj.geoCraster().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  cylindricalequalarea: {
    id: "cylindricalequalarea",
    name: "CylindricalEqualArea",
    projection: d3proj.geoCylindricalEqualArea().scale(120),
    type: "Cylindrical",
    property: "Equal-area and Perspective",
  },
  cylindricalstereographic: {
    id: "cylindricalstereographic",
    name: "CylindricalStereographic(Gall)",
    projection: d3proj.geoCylindricalStereographic().scale(100),
    type: "Cylindrical",
    property: "Compromise",
  },
  eckert1: {
    id: "eckert1",
    name: "Eckert1",
    projection: d3proj.geoEckert1().scale(95),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert2: {
    id: "eckert2",
    name: "Eckert2",
    projection: d3proj.geoEckert2().scale(95),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert3: {
    id: "eckert3",
    name: "Eckert3",
    projection: d3proj.geoEckert3().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert4: {
    id: "eckert4",
    name: "Eckert4",
    projection: d3proj.geoEckert4().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert5: {
    id: "eckert5",
    name: "Eckert5",
    projection: d3proj.geoEckert5().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eckert6: {
    id: "eckert6",
    name: "Eckert6",
    projection: d3proj.geoEckert6().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  eisenlohr: {
    id: "eisenlohr",
    name: "Eisenlohr",
    projection: d3proj.geoEisenlohr().scale(100),
    type: "Other",
    property: "Conformal",
  },
  fahey: {
    id: "fahey",
    name: "Fahey",
    projection: d3proj.geoFahey().scale(100),
    type: "Pseudocylindrical",
    property: "Other",
  },
  foucaut: {
    id: "foucaut",
    name: "Foucaut",
    projection: d3proj.geoFoucaut().scale(80),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  foucautsinusoidal: {
    id: "foucautsinusoidal",
    name: "Foucaut Sinusoidal",
    projection: d3proj.geoFoucautSinusoidal().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  gingery: {
    id: "gingery",
    name: "Gingery",
    projection: d3proj.geoGingery().scale(70),
    type: "Azimuthal",
    property: "Equidistant",
  },
  ginzburg4: {
    id: "ginzburg4",
    name: "Ginzburg4",
    projection: d3proj.geoGinzburg4().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg5: {
    id: "ginzburg5",
    name: "Ginzburg5",
    projection: d3proj.geoGinzburg5().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg6: {
    id: "ginzburg6",
    name: "Ginzburg6",
    projection: d3proj.geoGinzburg6().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg8: {
    id: "ginzburg8",
    name: "Ginzburg8",
    projection: d3proj.geoGinzburg8().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
  ginzburg9: {
    id: "ginzburg9",
    name: "Ginzburg9",
    projection: d3proj.geoGinzburg9().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
  gringorten: {
    id: "gringorten",
    name: "Gringorten",
    projection: d3proj.geoGringorten().scale(150),
    type: "Other",
    property: "Equal-area",
  },
  guyou: {
    id: "guyou",
    name: "Guyou",
    projection: d3proj.geoGuyou().scale(100),
    type: "Other",
    property: "Conformal",
  },
  hammer: {
    id: "hammer",
    name: "Hammer",
    projection: d3proj.geoHammer().scale(95),
    type: "Lenticular",
    property: "Equal-area",
  },
  hammerretroazimuthal: {
    id: "hammerretroazimuthal",
    name: "Hammer Retroazimuthal",
    projection: d3proj.geoHammerRetroazimuthal().scale(90),
    type: "Modified azimuthal",
    property: "Other",
  },
  healpix: {
    id: "healpix",
    name: "Healpix",
    projection: d3proj.geoHealpix().scale(160),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hill: {
    id: "hill",
    name: "Hill",
    projection: d3proj.geoHill().scale(100),
    type: "Pseudoconical",
    property: "Equal-area",
  },
  homolosine: {
    id: "homolosine",
    name: "Homolosine",
    projection: d3proj.geoHomolosine().scale(85),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hufnagel: {
    id: "hufnagel",
    name: "Hufnagel",
    projection: d3proj.geoHufnagel().scale(100),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  hyperelliptical: {
    id: "hyperelliptical",
    name: "Hyperelliptical",
    projection: d3proj.geoHyperelliptical().scale(85),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  kavrayskiy7: {
    id: "kavrayskiy7",
    name: "Kavrayskiy7",
    projection: d3proj.geoKavrayskiy7().scale(100),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  lagrange: {
    id: "lagrange",
    name: "Lagrange",
    projection: d3proj.geoLagrange().scale(100),
    type: "Polyconic",
    property: "Conformal",
  },
  larrivee: {
    id: "larrivee",
    name: "Larrivee",
    projection: d3proj.geoLarrivee().scale(90),
    type: "Other",
    property: "Compromise",
  },
  laskowski: {
    id: "laskowski",
    name: "Laskowski",
    projection: d3proj.geoLaskowski().scale(90),
    type: "Other",
    property: "Compromise",
  },
  loximuthal: {
    id: "loximuthal",
    name: "Loximuthal",
    projection: d3proj.geoLoximuthal().scale(90),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  miller: {
    id: "miller",
    name: "Miller",
    projection: d3proj.geoMiller().scale(100),
    type: "Cylindrical",
    property: "Compromise",
  },
  // modifiedstereographicalaska: {
  //   id: "modifiedstereographicalaska",
  //   name: "Modified Stereographic Alaska",
  //   projection: d3proj.geoModifiedStereographicAlaska().scale(300),
  //   type: "Azimuthal",
  //   property: "Conformal",
  // },
  // modifiedstereographicgs48: {
  //   id: "modifiedstereographicgs48",
  //   name: "Modified Stereographic Gs48",
  //   projection: d3proj.geoModifiedStereographicGs48().scale(160),
  //   type: "Azimuthal",
  //   property: "Conformal",
  // },
  // modifiedstereographicgs50: {
  //   id: "modifiedstereographicgs50",
  //   name: "Modified Stereographic Gs50",
  //   projection: d3proj.geoModifiedStereographicGs50().scale(100),
  //   type: "Azimuthal",
  //   property: "Conformal",
  // },
  modifiedstereographicmiller: {
    id: "modifiedstereographicmiller",
    name: "Modified Stereographic Miller",
    projection: d3proj.geoModifiedStereographicMiller().scale(130),
    type: "Modified azimuthal",
    property: "Conformal",
  },
  modifiedstereographiclee: {
    id: "modifiedstereographiclee",
    name: "Modified Stereographic Lee",
    projection: d3proj.geoModifiedStereographicLee().scale(50),
    type: "Modified azimuthal",
    property: "Conformal",
  },
  mollweide: {
    id: "mollweide",
    name: "Mollweide",
    projection: d3proj.geoMollweide().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarparabolic: {
    id: "mtflatpolarparabolic",
    name: "Mt Flat Polar Parabolic",
    projection: d3proj.geoMtFlatPolarParabolic().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarquartic: {
    id: "mtflatpolarquartic",
    name: "Mt Flat Polar Quartic",
    projection: d3proj.geoMtFlatPolarQuartic().scale(120),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  mtflatpolarsinusoidal: {
    id: "mtflatpolarsinusoidal",
    name: "Mt Flat Polar Sinusoidal",
    projection: d3proj.geoMtFlatPolarSinusoidal().scale(90),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  naturalearth2: {
    id: "naturalearth2",
    name: "Natural Earth 2",
    projection: d3proj.geoNaturalEarth2().scale(100),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  nellhammer: {
    id: "nellhammer",
    name: "Nell Hammer",
    projection: d3proj.geoNellHammer().scale(85),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  nicolosi: {
    id: "nicolosi",
    name: "Nicolosi",
    projection: d3proj.geoNicolosi().scale(80),
    type: "Pseudoconical",
    property: "Compromise",
  },
  patterson: {
    id: "patterson",
    name: "Patterson",
    projection: d3proj.geoPatterson().scale(100),
    type: "Cylindrical",
    property: "Compromise",
  },
  polyconic: {
    id: "polyconic",
    name: "Polyconic",
    projection: d3proj.geoPolyconic().scale(80),
    type: "Polyconic",
    property: "Other",
  },
  rectangularpolyconic: {
    id: "rectangularpolyconic",
    name: "Rectangular Polyconic",
    projection: d3proj.geoRectangularPolyconic().scale(85),
    type: "Polyconic",
    property: "Other",
  },
  robinson: {
    id: "robinson",
    name: "Robinson",
    projection: d3proj.geoRobinson().scale(85),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  satellite: {
    id: "satellite",
    name: "Satellite",
    projection: d3proj.geoSatellite().scale(300),
    type: "Azimuthal",
    property: "Perspective",
  },
  sinusoidal: {
    id: "sinusoidal",
    name: "Sinusoidal",
    projection: d3proj.geoSinusoidal().scale(85),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  sinumollweide: {
    id: "sinumollweide",
    name: "Sinu Mollweide",
    projection: d3proj.geoSinuMollweide().scale(95),
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  times: {
    id: "times",
    name: "Times",
    projection: d3proj.geoTimes().scale(100),
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  // twopointazimuthalusa: {
  //   id: "twopointazimuthalusa",
  //   name: "Two Point Azimuthal Usa",
  //   projection: d3proj.geoTwoPointAzimuthalUsa().scale(100),
  //   type: "Azimuthal",
  //   property: "Equidistant",
  // },
  vandergrinten2: {
    id: "vandergrinten2",
    name: "Van Der Grinten 2",
    projection: d3proj.geoVanDerGrinten2().scale(60),
    type: "Polyconic",
    property: "Compromise",
  },
  vandergrinten3: {
    id: "vandergrinten3",
    name: "Van Der Grinten 3",
    projection: d3proj.geoVanDerGrinten3().scale(60),
    type: "Other",
    property: "Compromise",
  },
  wagner: {
    id: "wagner",
    name: "Wagner VII",
    projection: d3proj.geoWagner().scale(95),
    type: "Modified azimuthal",
    property: "Equal-area",
  },
  wiechel: {
    id: "wiechel",
    name: "Wiechel",
    projection: d3proj.geoWiechel().scale(100),
    type: "Modified azimuthal",
    property: "Equal-area",
  },
  winkel3: {
    id: "winkel3",
    name: "Winkel Tripel",
    projection: d3proj.geoWinkel3().scale(100),
    type: "Lenticular",
    property: "Compromise",
  },
};

export const PROJECTIONS_OPTIONS = Object.entries(PROJECTIONS).map(
  ([key, projection]) => ({
    label: projection.name,
    value: key,
  })
);

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
  "Modified azimuthal": "",
  Polyconic:
    "Polyconic projections are characterized by straight meridians and curved parallels. They are commonly used for mapping large regions or countries with significant east-west extent.",
  // Trimetric:
  //   "Trimetric projections are a type of trimetric projection characterized by the use of three different scales for the three principal directions. They are often used for specialized mapping purposes where specific areas or features require accurate representation.",
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
  "Conformal and Perspective":
    "Preserves local shapes or angles and simulates a three-dimensional perspective view of the Earth's surface.",
  "Equal-area and Perspective":
    "Preserves relative sizes of areas on the map and Simulates a three-dimensional perspective view of the Earth's surface.",
  Compromise:
    "Aims to balance various properties such as area, distance, and shape distortion.",
  Other:
    "Projections that don't fall into the above categories or have unique characteristics.",
};
