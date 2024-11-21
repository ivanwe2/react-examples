import { createSlice } from "@reduxjs/toolkit";
import { resetReduxopedia } from "../action/actions";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong KOng",
        days: 7,
        fact: "Worlds longest escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Samurai",
      },
      {
        name: "Peru",
        days: 9,
        fact: "Long ahh",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
      state.destinationSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxopedia, (state) => {
        state.destinationSelected = null;
    })
  }
});

export const { destinationClicked, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
