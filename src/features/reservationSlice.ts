import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IReserationState {
  value: string[];
}

const initialState: IReserationState = {
  value: ["Manuel"],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // inside the reducer, we create the method that we use to update this particular State
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
