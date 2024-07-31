import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Paganation from "./Paganation";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsCount } from "../redux/apiCalls/postApiCall";
import { SideBar } from "./SideBar";
import { categories } from "../dummyData";
import { Link } from "react-router-dom";
import styled from "styled-components";
const PostList = () => {
  const { posts } = useSelector((state) => state.post);
  const { postsCount } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const POST_PER_PAGE = 3;

  const [currentPage, setcurrentPage] = useState(1);
  const pages = Math.ceil(postsCount / POST_PER_PAGE);
  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage]);

  useEffect(() => {
    dispatch(getPostsCount());
  }, [getPostsCount]);
  console.log(posts);
  return (
    <Holder>
      <div className="container">
        <SideBar categories={categories} />
        <div className="row  gap-3 justify-content-center">
          {/* <div className="col-10"> */}
          {/* <h2 className="mt-3">latest post</h2> */}
          {posts?.map((item) => (
            <PostItem post={item} key={item?._id} />
          ))}
          :{/* </div> */}
        </div>
        <div className="col-12">
          {posts?.length > 2 && (
            <Paganation
              currentPage={currentPage}
              setcurrentPage={setcurrentPage}
              pages={pages}
            />
          )}
        </div>
      </div>
    </Holder>
  );
};

const Holder = styled.div`
  background-image: url("https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  padding-bottom: 5px;
  min-height: 100vh;
`;

export default PostList;
