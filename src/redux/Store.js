import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {profileReducer} from "./slices/profileSlice";
import {postReducer} from "./slices/postSlice";
import {categoryReducer} from "./slices/categorySlice";
import {commentReducer} from "./slices/commentSlice";
import {passwordReducer} from "./slices/passwordSlice";
const Store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    category: categoryReducer,
    comment: commentReducer,
    password: passwordReducer,
  },
});

export default Store;
