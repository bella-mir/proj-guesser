import { createAction } from "@reduxjs/toolkit";

export const setAppMode = createAction(
  `appState/setAppMode`,
  (payload: "learn" | "quiz") => ({
    payload,
  })
);

export const setQuizMode = createAction(
  `appState/setQuizMode`,
  (payload: "start" | "questions" | "results") => ({
    payload,
  })
);

export const setQuestionNumber = createAction(
  `appState/setQuestionNumber`,
  (payload: number) => ({
    payload,
  })
);

export const setQuestionType = createAction(
  `appState/setQuestionType`,
  (payload: "names" | "properties") => ({
    payload,
  })
);
