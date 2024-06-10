import {createSlice} from "@reduxjs/toolkit";
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },
  reducers: {
    setprofile(state, action) {
      state.profile = action.payload;
    },
    setprofilePhoto(state, action) {
      state.profile.profilePhoto = action.payload;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

const profileReducer = profileSlice.reducer;
const profileActions = profileSlice.actions;

export {profileReducer, profileActions};
