import { createSelector } from "@reduxjs/toolkit";
import { TAppState } from "./app-types";

export const getAppState = (state: TAppState) => state["appState"];

export const getAppMode = createSelector(getAppState, (state) => state.appMode);
