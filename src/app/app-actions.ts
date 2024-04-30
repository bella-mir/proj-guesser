import { createAction } from "@reduxjs/toolkit";

export const setAppMode = createAction(
  `appState/setAppMode`,
  (payload: "learn" | "quiz") => ({
    payload,
  })
);
