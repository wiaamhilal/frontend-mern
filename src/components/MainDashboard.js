import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {
  addCategoryApi,
  fitchAllCategories,
} from "../redux/apiCalls/categoryApiCall";
import {getUsersCountApi} from "../redux/apiCalls/profileApiCall";
import {getPostsCount} from "../redux/apiCalls/postApiCall";
import {fetshAllCommentsApi} from "../redux/apiCalls/commentApiCall";

const MainDashboard = () => {
  const {categories} = useSelector((state) => state.category);
  const {usersCount} = useSelector((state) => state.profile);
  const {postsCount} = useSelector((state) => state.post);
  const {comments} = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fitchAllCategories());
    dispatch(getUsersCountApi());
    dispatch(getPostsCount());
    dispatch(fetshAllCommentsApi());
  }, []);

  const [title, settitle] = useState("");

  const addcategroyFunc = (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("category title is required");
    } else {
      dispatch(addCategoryApi({title}));
      settitle("");
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3">
          <h4>Users</h4>
          <h5>{usersCount}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <Link className="btn btn-success btn-sm">see all users</Link>{" "}
            <i>i</i>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-3 shadow rounded">
          <h4>Posts</h4>
          <h5>{postsCount}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <Link className="btn btn-success btn-sm">see all posts</Link>{" "}
            <i>i</i>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3">
          <h4>category</h4>
          <h5>{categories?.length}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <Link className="btn btn-success btn-sm">see all category</Link>{" "}
            <i>i</i>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3">
          <h4>comments</h4>
          <h5>{comments.length}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <Link className="btn btn-success btn-sm">see all comments</Link>{" "}
            <i>i</i>
          </div>
        </div>
      </div>
      <div
        className="the-form shadow mt-5 p-3 rounded m-auto"
        style={{maxWidth: "600px"}}
      >
        <h4 className="mb-4">add a new category</h4>
        <form onSubmit={addcategroyFunc}>
          <label htmlFor="category" className="fw-bold mb-2 text-secondary">
            category title
          </label>
          <input
            value={title}
            type="text"
            id="category"
            className="my-input"
            onChange={(e) => settitle(e.target.value)}
            name="title"
          />
          <button className="btn btn-success w-100">add</button>
        </form>
      </div>
    </div>
  );
};

export default MainDashboard;
