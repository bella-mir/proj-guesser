import { createContext } from "react";

interface ContextState {
  currentQuizProjection: string;
  setCurrentQuizProjection: (value: string) => void;
}

export const QuizContext = createContext({} as ContextState);
