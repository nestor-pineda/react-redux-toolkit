import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/costumerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // For Typescript
export type AppDispatch = typeof store.dispatch;
