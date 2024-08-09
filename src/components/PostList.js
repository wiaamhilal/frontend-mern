import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Paganation from "./Paganation";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsCount } from "../redux/apiCalls/postApiCall";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
const PostList = () => {
  const { posts } = useSelector((state) => state.post);
  const { postsCount } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const POST_PER_PAGE = 8;

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
        <SideBar />
        <div className="row  gap-3 justify-content-center">
          {posts?.map((item) => (
            <PostItem post={item} key={item?._id} />
          ))}
        </div>
        <div className="col-12 mt-3">
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

const Holder = styled.div``;

export default PostList;
