import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PostItem = ({ post, username, userId }) => {
  const selectUser = userId
    ? `/profile/${userId}`
    : `/profile/${post?.user._id}`;
  return (
    // <Main className="shadow">
    //   <img src={post?.image.url} alt="" />
    //   <Auther>
    //     {" "}
    //     <Link to={selectUser}>
    //       {" "}
    //       auther: {username ? username : post?.user.username}
    //     </Link>{" "}
    //     <span>{post?.createdAt}</span>
    //   </Auther>
    //   <div className="d-flex align-items-center justify-content-between">
    //     <h2>{post?.title}</h2>
    //     <Link
    //       to={`/posts/category/${post?.category}`}
    //       className="text-white btn btn-sm btn-secondary rounded-pill"
    //     >
    //       {post?.category}
    //     </Link>
    //   </div>
    //   <p>
    //     hi this is desc for traingn only dont foucus ono in sik hi how are is
    //     all good
    //   </p>
    //   <Link
    //     className="btn btn-success w-100"
    //     to={`/posts/details/${post?._id}`}
    //   >
    //     Read more..
    //   </Link>
    // </Main>
    <Link
      to={`/post-detals/${post._id}`}
      class="card mt-4 border-0 row-md-6 my-shadw my-card col-3 p-0"
      style={{
        width: "18rem",
        textDecoration: "none",
      }}
    >
      <img src={post?.image.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{post?.title}</h5>
        <p class="card-text">{post?.description.substring(0, 120)}</p>
        {/* <Link to={`/product/${id}`} class="btn btn-primary">
        More Info
      </Link> */}
      </div>
    </Link>
  );
};
const Main = styled.div`
// padding: 20px;
margin-bottom:20px;
background: white;
border-radius: 20px;
}
  img {
    width: 100%;
    border-radius: 20px;
  }
  h2 {
  }
  p {
  }
`;
const Auther = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: bold;
  color: darkslategray;

  span {
  }
`;
export default PostItem;
