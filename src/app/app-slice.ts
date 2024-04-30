import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./app-types";
import { setAppMode } from "./app-actions";

const initialState: IAppState = {
  appMode: "learn",
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
  },
});
