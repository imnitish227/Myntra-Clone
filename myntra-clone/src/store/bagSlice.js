import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      let itemRemove = action.payload;
      return state.filter((item) => item !== itemRemove);
    },
  },
});
export const bagAction = bagSlice.actions;
export default bagSlice;
