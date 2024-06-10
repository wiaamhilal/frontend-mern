import {profileActions} from "../slices/profileSlice";
import request from "../../utils/request";
import {toast} from "react-toastify";
import {authActions} from "../slices/authSlice";

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

// change profile photo
export function changeProfilePhoto(newImage) {
  return async (dispatch, getState) => {
    try {
      const {data} = await request.post(
        `/api/users/profile/profile-photo-upload`,
        newImage,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(profileActions.setprofilePhoto(data.profilePhoto));
      dispatch(authActions.setUserImage(data.profilePhoto));
      toast.success(data.message);

      let user = JSON.parse(localStorage.getItem("userInfo"));
      user.profilePhoto = data.profilePhoto;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// change profile photo
export function updateProfile(userId, newUpdate) {
  return async (dispatch, getState) => {
    try {
      const {data} = await request.put(
        `/api/users/profile/${userId}`,
        newUpdate,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(profileActions.setProfile(data));
      dispatch(authActions.updateUsername(data.username));
      toast.success(data.message);

      let user = JSON.parse(localStorage.getItem("userInfo"));
      user.username = data.username;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
