import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addCategoryApi,
  fitchAllCategories,
} from "../redux/apiCalls/categoryApiCall";
import { getUsersCountApi } from "../redux/apiCalls/profileApiCall";
import { getPostsCount } from "../redux/apiCalls/postApiCall";
import { fetshAllCommentsApi } from "../redux/apiCalls/commentApiCall";

const MainDashboard = () => {
  const { categories } = useSelector((state) => state.category);
  const { usersCount } = useSelector((state) => state.profile);
  const { postsCount, orders } = useSelector((state) => state.post);
  const { comments } = useSelector((state) => state.comment);
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
      dispatch(addCategoryApi({ title }));
      settitle("");
    }
  };
  return (
    <div>
      <div className="row justify-content-center gap-3">
        <div className="col-12 col-sm-6 col-md-3 p-3 shadow rounded bg-white">
          <div className="d-flex align-itmes-center justify-content-between">
            <h4>Users</h4>
            <h5>{usersCount}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="https://cdn-icons-png.freepik.com/512/9196/9196300.png"
              style={{ width: "100px", marginBottom: "10px" }}
              alt=""
            />
          </div>
          <Link
            to="/dashboard/user-table"
            className="btn btn-success btn-sm  w-100 fw-bold"
          >
            see all users
          </Link>{" "}
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-3 shadow rounded bg-white">
          <div className="d-flex align-itmes-center justify-content-between">
            <h4>Products</h4>
            <h5>{postsCount}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="https://icons.veryicon.com/png/o/application/applet-1/product-17.png"
              style={{ width: "100px", marginBottom: "10px" }}
              alt=""
            />
          </div>
          <Link
            to="/dashboard/posts-tabe"
            className="btn btn-success btn-sm w-100 fw-bold"
          >
            see all products
          </Link>{" "}
        </div>
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3 bg-white">
          <div className="d-flex align-itmes-center justify-content-between">
            <h4>Categories</h4>
            <h5>{categories.length}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-3/32/internet-gray-512.png"
              style={{ width: "100px", marginBottom: "10px" }}
              alt=""
            />
          </div>
          <Link
            to="/dashboard/categories-tabe"
            className="btn btn-success btn-sm w-100 fw-bold"
          >
            see all categories
          </Link>{" "}
        </div>
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3 bg-white">
          <div className="d-flex align-itmes-center justify-content-between">
            <h4>comments</h4>
            <h5>{comments.length}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="https://cdn-icons-png.freepik.com/512/9189/9189094.png"
              style={{ width: "100px", marginBottom: "10px" }}
              alt=""
            />
          </div>
          <Link
            to="/dashboard/comment-table"
            className="btn btn-success btn-sm w-100 fw-bold"
          >
            see all comments
          </Link>{" "}
        </div>
        <div className="col-12 col-sm-6 col-md-3 shadow rounded p-3 bg-white">
          <div className="d-flex align-itmes-center justify-content-between">
            <h4>Orders</h4>
            <h5>{orders.length}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src="https://cdn.icon-icons.com/icons2/2483/PNG/512/order_number_icon_149906.png"
              style={{ width: "100px", marginBottom: "10px" }}
              alt=""
            />
          </div>
          <Link
            to="/dashboard/orders-status"
            className="btn btn-success btn-sm w-100 fw-bold"
          >
            Check orders status
          </Link>{" "}
        </div>
      </div>
      <div
        className="the-form shadow mt-5 p-3 rounded m-auto bg-white"
        style={{ maxWidth: "600px" }}
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
          <button className="btn btn-success w-100 fw-bold btn-sm">add</button>
        </form>
      </div>
    </div>
  );
};

export default MainDashboard;
