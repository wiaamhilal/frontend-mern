import request from "../../utils/request";
import { toast } from "react-toastify";
import { postActions } from "../slices/postSlice";

// get all posts by page number
export function fetchPosts(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get all posts by page number
export function fetchMaxPosts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/max-posts`);
      dispatch(postActions.setMaxPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get post count
export function getPostsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/count`);
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
      const { data } = await request.get(`/api/posts?category=${category}`);
      dispatch(postActions.setPostsCate(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get post by the category
export function createNewPost(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading(true));
      await request.post(`/api/posts`, newPost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(postActions.setIsPostCreated());
      setTimeout(() => dispatch(postActions.falseIsPostCreated()), 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.setLoading(false));
    }
  };
}

// fetch single post
export function fetchSinglePost(postId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/${postId}`);
      dispatch(postActions.setpost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// toggle like
export function toggleLike(postId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            Authorization: "bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(postActions.setLikes(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// toggle dislike
export function toggleDislike(postId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            Authorization: "bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(postActions.setDislikes(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// update post image
export function updatePostImage(newImage, postId) {
  return async (dispatch, getState) => {
    try {
      await request.put(`/api/posts/update-image/${postId}`, newImage, {
        headers: {
          Authorization: "bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("the image has been upladed");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// updtate post
export function updatePostText(newPost, postId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(`/api/posts/${postId}`, newPost, {
        headers: {
          Authorization: "bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// updtate post
export function deletePostApi(postId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.delete(`/api/posts/${postId}`, {
        headers: {
          Authorization: "bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setPosts(data.postId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get all posts
export function fetchAllPosts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// set new order
export function createNewOrderApi(newOrder) {
  return async (dispatch, getState) => {
    try {
      await request.post(`/api/orders/my-orders`, newOrder, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setOrders(newOrder));
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.setLoading(false));
    }
  };
}

// get all orders
export function getAllOrdersApi(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/api/orders/my-orders?pageNumber=${pageNumber}`
      );
      dispatch(postActions.setOrders(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// updtate order status
export function updateOrderStatusApi(newOrder, orderId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/orders/my-orders/${orderId}`,
        newOrder,
        {
          headers: {
            Authorization: "bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(postActions.setOrders(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get orders count
export function getOrdersCountApi() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/orders/count`);
      dispatch(postActions.setOrdersCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get max all orders
export function getMaxAllOrdersApi() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/orders/all-orders`);
      dispatch(postActions.setAllOrders(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
