import { createSelector } from "@reduxjs/toolkit";
import { TAppState } from "./app-types";

export const getAppState = (state: TAppState) => state["appState"];

export const getAppMode = createSelector(getAppState, (state) => state.appMode);

export const getQuizMode = createSelector(
  getAppState,
  (state) => state.quizMode
);

export const getQuestionType = createSelector(
  getAppState,
  (state) => state.questionType
);

export const getQuestionNumber = createSelector(
  getAppState,
  (state) => state.questionNumber
);
