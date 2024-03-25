import * as d3 from "d3";
//@ts-expect-error: no types
import * as d3proj from "d3-geo-projection";

export const PROJECTIONS = [
  {
    name: "Azimuthal Equal Area",
    projection: d3.geoAzimuthalEqualArea,
    type: "Azimuthal",
    property: "Equal-area",
  },
  {
    name: "Azimuthal Equidistant",
    projection: d3.geoAzimuthalEquidistant,
    type: "Azimuthal",
    property: "Equidistant",
  },
  {
    name: "Gnomonic",
    projection: d3.geoGnomonic,
    type: "Azimuthal",
    property: "Gnomonic",
  },
  {
    name: "Orthographic",
    projection: d3.geoOrthographic,
    type: "Azimuthal",
    property: "Perspective",
  },
  {
    name: "Stereographic",
    projection: d3.geoStereographic,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Equal Earth",
    projection: d3.geoEqualEarth,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Albers Usa",
    projection: d3.geoAlbersUsa,
    type: "Conic",
    property: "Equal-area",
  },
  {
    name: "Albers",
    projection: d3.geoAlbers,
    type: "Conic",
    property: "Equal-area",
  },
  {
    name: "Conic Equal Area",
    projection: d3.geoConicEqualArea,
    type: "Conic",
    property: "Equal-area",
  },
  {
    name: "Conic Equidistant",
    projection: d3.geoConicEquidistant,
    type: "Conic",
    property: "Equidistant",
  },
  {
    name: "Equirectangular",
    projection: d3.geoEquirectangular,
    type: "Cylindrical",
    property: "Equidistant",
  },
  {
    name: "Mercator",
    projection: d3.geoMercator,
    type: "Cylindrical",
    property: "Conformal",
  },
  {
    name: "Transverse Mercator",
    projection: d3.geoTransverseMercator,
    type: "Cylindrical",
    property: "Conformal",
  },
  {
    name: "Natural Earth1",
    projection: d3.geoNaturalEarth1,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Airy",
    projection: d3proj.geoAiry,
    type: "Azimuthal",
    property: "Compromise",
  },
  {
    name: "Aitoff",
    projection: d3proj.geoAitoff,
    type: "Pseudoazimuthal",
    property: "Compromise",
  },
  {
    name: "Armadillo",
    projection: d3proj.geoArmadillo,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "August",
    projection: d3proj.geoAugust,
    type: "Other",
    property: "Conformal",
  },
  {
    name: "Baker",
    projection: d3proj.geoBaker,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Berghaus",
    projection: d3proj.geoBerghaus,
    type: "Azimuthal",
    property: "Equidistant",
  },
  {
    name: "Bertin1953",
    projection: d3proj.geoBertin1953,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "Boggs",
    projection: d3proj.geoBoggs,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Bonne",
    projection: d3proj.geoBonne,
    type: "Pseudoconical",
    property: "Equal-area",
  },
  {
    name: "Bottomley",
    projection: d3proj.geoBottomley,
    type: "Pseudoconical",
    property: "Equal-area",
  },
  {
    name: "Bromley",
    projection: d3proj.geoBromley,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Chamberlin Africa",
    projection: d3proj.geoChamberlinAfrica,
    type: "Trimetric",
    property: "Other",
  },
  {
    name: "Collignon",
    projection: d3proj.geoCollignon,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Craig",
    projection: d3proj.geoCraig,
    type: "Retroazimuthal",
    property: "Compromise",
  },
  {
    name: "Craster",
    projection: d3proj.geoCraster,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "CylindricalEqualArea",
    projection: d3proj.geoCylindricalEqualArea,
    type: "Cylindrical",
    property: "Equal-area",
  },
  {
    name: "CylindricalStereographic",
    projection: d3proj.geoCylindricalStereographic,
    type: "Cylindrical",
    property: "Conformal",
  },
  {
    name: "Eckert1",
    projection: d3proj.geoEckert1,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eckert2",
    projection: d3proj.geoEckert2,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eckert3",
    projection: d3proj.geoEckert3,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eckert4",
    projection: d3proj.geoEckert4,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eckert5",
    projection: d3proj.geoEckert5,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eckert6",
    projection: d3proj.geoEckert6,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Eisenlohr",
    projection: d3proj.geoEisenlohr,
    type: "Other",
    property: "Conformal",
  },
  {
    name: "Fahey",
    projection: d3proj.geoFahey,
    type: "Pseudocylindrical",
    property: "Other",
  },
  {
    name: "Foucaut",
    projection: d3proj.geoFoucaut,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Foucaut Sinusoidal",
    projection: d3proj.geoFoucautSinusoidal,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  // {
  //   name: "Gilbert",
  //   projection: d3proj.geoGilbert,
  //   type: "Azimuthal",
  //   property: "Conformal",
  // },
  {
    name: "Gingery",
    projection: d3proj.geoGingery,
    type: "Azimuthal",
    property: "Equidistant",
  },
  {
    name: "Ginzburg4",
    projection: d3proj.geoGinzburg4,
    type: "Lenticular",
    property: "Compromise",
  },
  {
    name: "Ginzburg5",
    projection: d3proj.geoGinzburg5,
    type: "Lenticular",
    property: "Compromise",
  },
  {
    name: "Ginzburg6",
    projection: d3proj.geoGinzburg6,
    type: "Lenticular",
    property: "Compromise",
  },
  {
    name: "Ginzburg8",
    projection: d3proj.geoGinzburg8,
    type: "Lenticular",
    property: "Compromise",
  },
  {
    name: "Ginzburg9",
    projection: d3proj.geoGinzburg9,
    type: "Lenticular",
    property: "Compromise",
  },
  {
    name: "Gringorten",
    projection: d3proj.geoGringorten,
    type: "Other",
    property: "Equal-area",
  },
  {
    name: "Guyou",
    projection: d3proj.geoGuyou,
    type: "Other",
    property: "Conformal",
  },
  {
    name: "Hammer",
    projection: d3proj.geoHammer,
    type: "Pseudoazimuthal",
    property: "Equal-area",
  },
  {
    name: "Hammer Retroazimuthal",
    projection: d3proj.geoHammerRetroazimuthal,
    type: "Retroazimuthal",
    property: "Other",
  },
  {
    name: "Healpix",
    projection: d3proj.geoHealpix,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Hill",
    projection: d3proj.geoHill,
    type: "Pseudoconical",
    property: "Equal-area",
  },
  {
    name: "Homolosine",
    projection: d3proj.geoHomolosine,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Hufnagel",
    projection: d3proj.geoHufnagel,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Hyperelliptical",
    projection: d3proj.geoHyperelliptical,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Kavrayskiy7",
    projection: d3proj.geoKavrayskiy7,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Lagrange",
    projection: d3proj.geoLagrange,
    type: "Other",
    property: "Conformal",
  },
  {
    name: "Larrivee",
    projection: d3proj.geoLarrivee,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "Laskowski",
    projection: d3proj.geoLaskowski,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "Loximuthal",
    projection: d3proj.geoLoximuthal,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Miller",
    projection: d3proj.geoMiller,
    type: "Cylindrical",
    property: "Compromise",
  },
  {
    name: "Modified Stereographic Alaska",
    projection: d3proj.geoModifiedStereographicAlaska,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Modified Stereographic Gs48",
    projection: d3proj.geoModifiedStereographicGs48,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Modified Stereographic Gs50",
    projection: d3proj.geoModifiedStereographicGs50,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Modified Stereographic Miller",
    projection: d3proj.geoModifiedStereographicMiller,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Modified Stereographic Lee",
    projection: d3proj.geoModifiedStereographicLee,
    type: "Azimuthal",
    property: "Conformal",
  },
  {
    name: "Mollweide",
    projection: d3proj.geoMollweide,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Mt Flat Polar Parabolic",
    projection: d3proj.geoMtFlatPolarParabolic,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Mt Flat Polar Quartic",
    projection: d3proj.geoMtFlatPolarQuartic,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Mt Flat Polar Sinusoidal",
    projection: d3proj.geoMtFlatPolarSinusoidal,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Natural Earth 2",
    projection: d3proj.geoNaturalEarth2,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Nell Hammer",
    projection: d3proj.geoNellHammer,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Nicolosi",
    projection: d3proj.geoNicolosi,
    type: "Pseudoconical",
    property: "Compromise",
  },
  {
    name: "Patterson",
    projection: d3proj.geoPatterson,
    type: "Cylindrical",
    property: "Compromise",
  },
  {
    name: "Polyconic",
    projection: d3proj.geoPolyconic,
    type: "Polyconic",
    property: "Other",
  },
  {
    name: "Rectangular Polyconic",
    projection: d3proj.geoRectangularPolyconic,
    type: "Polyconic",
    property: "Other",
  },
  {
    name: "Robinson",
    projection: d3proj.geoRobinson,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Satellite",
    projection: d3proj.geoSatellite,
    type: "Other",
    property: "Other",
  },
  {
    name: "Sinusoidal",
    projection: d3proj.geoSinusoidal,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Sinu Mollweide",
    projection: d3proj.geoSinuMollweide,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Times",
    projection: d3proj.geoTimes,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Two Point Azimuthal Usa",
    projection: d3proj.geoTwoPointAzimuthalUsa,
    type: "Azimuthal",
    property: "Equidistant",
  },
  {
    name: "Van Der Grinten 2",
    projection: d3proj.geoVanDerGrinten2,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "Van Der Grinten 3",
    projection: d3proj.geoVanDerGrinten3,
    type: "Other",
    property: "Compromise",
  },
  {
    name: "Wagner",
    projection: d3proj.geoWagner,
    type: "Azimuthal",
    property: "Equidistant",
  },
  {
    name: "Wagner4",
    projection: d3proj.geoWagner4,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Wagner6",
    projection: d3proj.geoWagner6,
    type: "Pseudocylindrical",
    property: "Compromise",
  },
  {
    name: "Wagner7",
    projection: d3proj.geoWagner7,
    type: "Pseudoazimuthal",
    property: "Equal-area",
  },
  {
    name: "Winkel 3",
    projection: d3proj.geoWinkel3,
    type: "Pseudoazimuthal",
    property: "Compromise",
  },

  {
    name: "Interrupted Homolosine",
    projection: d3proj.geoInterruptedHomolosine,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Interrupted Sinusoidal",
    projection: d3proj.geoInterruptedSinusoidal,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Interrupted Mollweide",
    projection: d3proj.geoInterruptedMollweide,
    type: "Pseudocylindrical",
    property: "Equidistant",
  },
  {
    name: "Interrupted Sinu Mollweide",
    projection: d3proj.geoInterruptedSinuMollweide,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  {
    name: "Interrupted Mollweide Hemispheres",
    projection: d3proj.geoInterruptedMollweideHemispheres,
    type: "Pseudocylindrical",
    property: "Equal-area",
  },
  // {
  //   name: "Polyhedral Butterfly",
  //   projection: d3proj.geoPolyhedralButterfly,
  //   type: "Polyhedral",
  //   property: "Equidistant",
  // },
  // {
  //   name: "Polyhedral Collignon",
  //   projection: d3proj.geoPolyhedralCollignon,
  //   type: "Polyhedral",
  //   property: "Equidistant",
  // },
  // {
  //   name: "Polyhedral Waterman",
  //   projection: d3proj.geoPolyhedralWaterman,
  //   type: "Polyhedral",
  //   property: "Equidistant",
  // },
  {
    name: "Peirce Quincuncial",
    projection: d3proj.geoPeirceQuincuncial,
    type: "Quincuncial",
    property: "Conformal",
  },
];

export const PROJECTIONS_OPTIONS = PROJECTIONS.map((projection) => ({
  label: projection.name,
  value: projection.projection,
}));

//   , s0 = [{
//     name: "Azimuthal",
//     description: "In standard presentation, azimuthal projections map meridians as straight lines and parallels as complete, concentric circles. They are radially symmetrical. In any presentation (or aspect), they preserve directions from the center point. This means great circles through the central point are represented by straight lines on the map."
// }, {
//     name: "Cylindrical",
//     description: "In standard presentation, these map regularly-spaced meridians to equally spaced vertical lines, and parallels to horizontal lines."
// }, {
//     name: "Pseudocylindrical",
//     description: "In standard presentation, these map the central meridian and parallels as straight lines. Other meridians are curves (or possibly straight from pole to equator), regularly spaced along parallels."
// }, {
//     name: "Conic",
//     description: "In standard presentation, conic (or conical) projections map meridians as straight lines, and parallels as arcs of circles."
// }, {
//     name: "Pseudoconical",
//     description: "In standard presentation, pseudoconical projections represent the central meridian as a straight line, other meridians as complex curves, and parallels as circular arcs."
// }, {
//     name: "Pseudoazimuthal",
//     description: "In standard presentation, pseudoazimuthal projections map the equator and central meridian to perpendicular, intersecting straight lines. They map parallels to complex curves bowing away from the equator, and meridians to complex curves bowing in toward the central meridian. Listed here after pseudocylindrical as generally similar to them in shape and purpose."
// }, {
//     name: "Other",
//     description: "Typically calculated from formula, and not based on a particular projection."
// }, {
//     name: "Polyhedral",
//     description: "Polyhedral maps can be folded up into a polyhedral approximation to the sphere, using particular projection to map each face with low distortion."
// }, {
//     name: "Trimetric",
//     description: "The Chamberlin trimetric projection is a map projection where three points are fixed on the globe and the points on the sphere are mapped onto a plane by triangulation."
// }, {
//     name: "Lenticular",
//     description: "Lenticular projections are similar to the pseudocylindrics. But while those show straight parallels, in lenticular projections the parallels curve toward the poles."
// }, {
//     name: "Retroazimuthal",
//     description: "Direction to a fixed location B (by the shortest route) corresponds to the direction on the map from A to B."
// }, {
//     name: "Polyconic",
//     description: "Refers to those projections whose parallels are all non-concentric circular arcs, except for a straight equator, and the centers of these circles lie along a central axis. This description applies to projections in equatorial aspect."
// }, {
//     name: "Quincuncial",
//     description: "The name quincuncial refers to this arrangement: the north pole at the center and quarters of the south pole in the corners form a quincunx pattern like the pips on the five face of a traditional die. The projection has the distinctive property that it forms a seamless square tiling of the plane, conformal except at four singular points along the equator."
// }]
//   , c0 = [{
//     name: "Equal-area",
//     description: "Area measure is conserved everywhere."
// }, {
//     name: "Conformal",
//     description: "Preserves angles locally, implying that local shapes are not distorted and that local scale is constant in all directions from any chosen point."
// }, {
//     name: "Compromise",
//     description: "Neither conformal nor equal-area, but a balance intended to reduce overall distortion."
// }, {
//     name: "Equidistant",
//     description: "All distances from one (or two) points are correct. Other equidistant properties are mentioned in the notes."
// }, {
//     name: "Gnomonic",
//     description: "All great circles are straight lines."
// }, {
//     name: "Other",
//     description: "The projection is neither conformal nor equal-area."
// }, {
//     name: "Perspective",
//     description: "The projection results from viewing the globe from some vantage point."
// }];
