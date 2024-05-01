import {
  Action,
  UnknownAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export interface IAppState {
  appMode: "learn" | "quiz";
  quizMode: "start" | "questions" | "results";
  questionType: "names" | "properties";
  questionNumber: number;
}

export type TAppState = {
  appState: IAppState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<TAppState, undefined, UnknownAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
