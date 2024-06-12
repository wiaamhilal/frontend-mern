import React, {useEffect, useState} from "react";
import styled from "styled-components";

import PostItem from "./PostItem";
import {SideBar} from "./SideBar";
import Paganation from "./Paganation";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostsCount} from "../redux/apiCalls/postApiCall";
import PostList from "./PostList";
const Posts = () => {
  const {posts} = useSelector((state) => state.post);

  return (
    <Main className="">
      <div className="row">
        <PostList posts={posts} />
      </div>
    </Main>
  );
};
const Main = styled.div`
  h2 {
    margin: 15px;
  }
  .home-img {
  }
`;

export default Posts;
