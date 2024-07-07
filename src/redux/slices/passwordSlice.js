import {createSlice} from "@reduxjs/toolkit";
const passwordSlice = createSlice({
  name: "category",
  initialState: {
    isError: false,
  },
  reducers: {
    setError(state) {
      state.isError = true;
    },
    clearError(state) {
      state.isError = false;
    },
  },
});

const passwordReducer = passwordSlice.reducer;
const passwordActions = passwordSlice.actions;

export {passwordReducer, passwordActions};
