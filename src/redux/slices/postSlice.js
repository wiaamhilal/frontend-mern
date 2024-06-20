import {createSlice} from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    postsCount: null,
    postsCate: [],
    loading: false,
    isPostCreated: false,
    post: null,
    likes: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPostsCount(state, action) {
      state.postsCount = action.payload;
    },
    setPostsCate(state, action) {
      state.postsCate = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIsPostCreated(state) {
      state.isPostCreated = true;
      state.loading = false;
    },
    falseIsPostCreated(state) {
      state.isPostCreated = false;
    },
    setpost(state, action) {
      state.post = action.payload;
    },
    setLikes(state, action) {
      state.post.likes = action.payload.likes;
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    setNewComment(state, action) {
      state.post.comments.push(action.payload);
    },
  },
});

const postReducer = postSlice.reducer;
const postActions = postSlice.actions;

export {postReducer, postActions};
