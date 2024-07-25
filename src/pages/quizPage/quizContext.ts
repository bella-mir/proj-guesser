import { createContext } from "react";
import { TProj } from "../../components/map/map-constants";

interface ContextState {
  currentQuizProjection: string;
  setCurrentQuizProjection: (value: string) => void;
  projQuestions?: TProj[];
  setQuestions: (value: TProj[]) => void;
}

export const QuizContext = createContext({} as ContextState);
