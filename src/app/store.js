import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Configure Redux store
export const store = configureStore({
  // Set reducer for the store
  reducer: todoReducer, // Using the todoReducer from todoSlice
});
