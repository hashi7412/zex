import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export const store = makeStore();
