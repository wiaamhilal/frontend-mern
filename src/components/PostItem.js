import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import happy from "../img/happy-face-2-svgrepo-com.svg";
import unhappy from "../img/unhappy-face-2-svgrepo-com.svg";
import FormatCurrency from "./FormatCurrency";
const PostItem = ({ post, username, userId }) => {
  const selectUser = userId
    ? `/profile/${userId}`
    : `/profile/${post?.user._id}`;
  return (
    <Link
      to={`/posts/details/${post._id}`}
      class="card mt-4 border-0 row-md-6 shadow my-card col-3 p-0"
      style={{
        width: "18rem",
        textDecoration: "none",
      }}
    >
      <img
        src={post?.image?.url || post?.images[0]?.url}
        class="card-img-top"
        alt="..."
        style={{ height: "192px" }}
      />
      <div class="card-body">
        {" "}
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: "48px" }}
        >
          <h5 class="card-title">{post?.title?.substring(0, 22)}</h5>
          <h6 class="card-title">{FormatCurrency(post?.price)}</h6>
        </div>
        <p class="card-text" style={{ height: "96px" }}>
          {post?.description?.substring(0, 120)}...
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={happy} alt="" style={{ width: "40px" }} />{" "}
            <span>{post?.likes.length}</span>
          </div>
          <div>
            <img src={unhappy} alt="" style={{ width: "40px" }} />{" "}
            <span>{post?.dislikes.length}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PostItem;
