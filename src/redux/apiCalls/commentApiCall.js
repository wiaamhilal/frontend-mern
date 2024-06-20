import request from "../../utils/request";
import {toast} from "react-toastify";
import {postActions} from "../slices/postSlice";

// create a new commetn
export function createNewComment(newComment) {
  return async (dispatch, getState) => {
    try {
      const {data} = await request.post("/api/comments", newComment, {
        headers: {
          Authorization: "bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setNewComment(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
