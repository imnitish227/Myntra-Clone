import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return {
        ...state,
        fetchDone: true,
      };
    },
    markFetchingStarted: (state) => {
      let newState = state;
      newState.currentlyFetching = true;
      return newState;
    },
    markFetchingDone: (state) => {
      let newState = state;
      newState.currentlyFetching = false;
      return newState;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
