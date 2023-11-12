import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reduces/signup";

export const store = configureStore({
   reducer: {
      signup: signupSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

// Root state
export type RootState = ReturnType<typeof store.getState>;
// App Dispatch
export type AppDispatch = typeof store.dispatch;
