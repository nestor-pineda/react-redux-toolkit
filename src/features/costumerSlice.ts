import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICostumer {
  id: string;
  name: string;
  food: string[];
}

interface ICustomerState {
  value: ICostumer[];
}

interface IAddFoodToCustomerPayload {
  food: string;
  id: string;
}

const initialState: ICustomerState = {
  value: [],
};

export const costumerSlice = createSlice({
  name: "costumers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<ICostumer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<IAddFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = costumerSlice.actions;

export default costumerSlice.reducer;
