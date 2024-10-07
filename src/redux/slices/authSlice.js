import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "test@gmail.com",
      isAccountVerified: true,
      isAdmin: true,
      profilePhoto: {
        url: "https://res.cloudinary.com/difwxqb62/image/upload/v1724743878/uz4fi2lh2dvpgi3wqmgk.jpg",
        publicId: "uz4fi2lh2dvpgi3wqmgk",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzRjYzIyZjJjMTRiNDg0OTg5Zjk0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNzk4NTUyOX0.LnD4I0vu9bbJkf4y-zRficFu0fyUBUv-S6MuyV4w5lY",
      username: "Test",
      _id: "66c4cc22f2c14b484989f943",
    },
    registerMessage: "",
    isEmailVerified: false,
    loadingApp: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.registerMessage = null;
    },
    logout(state, action) {
      state.user = null;
    },
    register(state, action) {
      state.registerMessage = action.payload;
    },
    setUserImage(state, action) {
      state.user.profilePhoto = action.payload;
    },
    updateUsername(state, action) {
      state.user.username = action.payload;
    },
    setisEmailVerified(state) {
      state.isEmailVerified = true;
      state.registerMessage = null;
    },
    setLoadingApp(state, action) {
      state.action = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer };

//  localStorage.getItem("userInfo")
// ? JSON.parse(localStorage.getItem("userInfo"))
// : null,
