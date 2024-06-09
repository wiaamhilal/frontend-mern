import {profileActions} from "../slices/profileSlice";
import request from "../../utils/request";
import {toast} from "react-toastify";

// get user profile
export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const {data} = await request.get(`/api/users/profile/${userId}`);
      dispatch(profileActions.setprofile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
