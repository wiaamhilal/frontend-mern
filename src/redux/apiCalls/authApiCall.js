import {authActions} from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from "react-toastify";

//login user
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const {data} = await request.post("/api/auth/login", user);
      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

//register user
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const {data} = await request.post("/api/auth/register", user);
      dispatch(authActions.register(data.message));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
//logout user
export function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  };
}

//verify email
export function verifyEmailApi(userId, token) {
  return async (dispatch) => {
    try {
      await request.get(`/api/auth/${userId}/verify/${token}`);
      dispatch(authActions.setisEmailVerified());
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}
