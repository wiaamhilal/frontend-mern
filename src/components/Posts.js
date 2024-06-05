import React from "react";
import styled from "styled-components";
import {posts, categories} from "../dummyData";
import PostItem from "./PostItem";
import {SideBar} from "./SideBar";
import Paganation from "./Paganation";
const Posts = () => {
  return (
    <Main className="">
      <div className="row">
        <div className="col-10">
          <h2>latest post</h2>
          {posts.map((item) => (
            <PostItem post={item} key={item._id} />
          ))}
        </div>
        <div className="col-2">
          <SideBar categories={categories} />
        </div>
      </div>
      <Paganation />
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
