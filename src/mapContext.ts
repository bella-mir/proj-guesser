import { createContext } from "react";

interface ContextState {
  currentProjection: string;
  setCurrentProjection: (value: string) => void;
}

export const MapContext = createContext({} as ContextState);
