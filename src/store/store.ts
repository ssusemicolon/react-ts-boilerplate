import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./ducks/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
