import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({ serializableCheck: true }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
