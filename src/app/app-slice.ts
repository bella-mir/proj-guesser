import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./app-types";
import {
  setAppMode,
  setQuestionNumber,
  setQuestionType,
  setQuizMode,
} from "./app-actions";

const initialState: IAppState = {
  appMode: "learn",
  quizMode: "start",
  questionNumber: 10,
  questionType: "names",
};

export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAppMode, (state, action) => ({
      ...state,
      appMode: action.payload,
    }));
    builder.addCase(setQuizMode, (state, action) => ({
      ...state,
      quizMode: action.payload,
    }));
    builder.addCase(setQuestionNumber, (state, action) => ({
      ...state,
      questionNumber: action.payload,
    }));
    builder.addCase(setQuestionType, (state, action) => ({
      ...state,
      questionType: action.payload,
    }));
  },
});
