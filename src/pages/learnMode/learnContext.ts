import { createContext } from "react";

interface ContextState {
  currentProjection: string;
  setCurrentProjection: (value: string) => void;
}

export const LearnContext = createContext({} as ContextState);
