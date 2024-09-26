import {
  TProjType,
  TProjProperty,
} from "../../../components/map/map-constants";

export const projectionTypes: TProjType[] = [
  "Azimuthal",
  "Pseudocylindrical",
  "Conic",
  "Pseudoconical",
  "Cylindrical",
  "Pseudoazimuthal",
  "Retroazimuthal",
  "Lenticular",
  "Polyconic",
  // "Trimetric",
  "Other",
];

export const projectionProperties: TProjProperty[] = [
  "Equal-area",
  "Equidistant",
  "Perspective",
  "Conformal",
  "Compromise",
  "Other",
];
