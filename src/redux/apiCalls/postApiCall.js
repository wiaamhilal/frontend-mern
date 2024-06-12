import request from "../../utils/request";
import {toast} from "react-toastify";
import {postActions} from "../slices/postSlice";

// get all posts
export function fetchPosts(pageNumber) {
  return async (dispatch) => {
    try {
      const {data} = await request.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get post count
export function getPostsCount() {
  return async (dispatch) => {
    try {
      const {data} = await request.get(`/api/posts/count`);
      dispatch(postActions.setPostsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get post by the category
export function fetchPostsByCategory(category) {
  return async (dispatch) => {
    try {
      const {data} = await request.get(`/api/posts?category=${category}`);
      dispatch(postActions.setPostsCate(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
