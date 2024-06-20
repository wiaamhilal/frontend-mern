import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {profileReducer} from "./slices/profileSlice";
import {postReducer} from "./slices/postSlice";
import {categoryReducer} from "./slices/categorySlice";
const Store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    category: categoryReducer,
  },
});

export default Store;
