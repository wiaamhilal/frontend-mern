import {createSlice} from "@reduxjs/toolkit";
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    loading: false,
    isProfileDeleted: false,
    usersCount: null,
    profiles: [],
  },
  reducers: {
    setprofile(state, action) {
      state.profile = action.payload;
    },
    setprofilePhoto(state, action) {
      state.profile.profilePhoto = action.payload;
    },
    // setProfile(state, action) {
    //   state.profile = action.payload;
    // },
    setloading(state) {
      state.loading = true;
    },
    clearLoaing(state) {
      state.loading = false;
    },
    setIsPostDeleted(state) {
      state.isProfileDeleted = true;
      state.loading = false;
    },
    clearisPostDeleted(state) {
      state.isProfileDeleted = false;
    },
    setUsersCount(state, action) {
      state.usersCount = action.payload;
    },
    setProfiles(state, action) {
      state.profiles = action.payload;
    },
  },
});

const profileReducer = profileSlice.reducer;
const profileActions = profileSlice.actions;

export {profileReducer, profileActions};
