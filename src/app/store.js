import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";

export const store = configureStore({
  // Global store
  reducer: {
    basket: basketReducer,
  },
});
