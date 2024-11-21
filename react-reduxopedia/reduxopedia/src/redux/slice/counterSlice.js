import { createSlice } from "@reduxjs/toolkit";
import { resetReduxopedia } from "../action/actions";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMiltiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMiltiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxopedia, (state) => {
        state.count = 0;
    })
  }
});

export const {
  increment,
  decrement,
  incrementMiltiplier,
  decrementMiltiplier,
  resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
