import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
  fetchPosts,
  fetchPostsByCategory,
  getPostsCount,
} from "../redux/apiCalls/postApiCall";
import PostList from "./PostList";
const CategoryPage = () => {
  const {postsCate, postsCount} = useSelector((state) => state.post);
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

  console.log(postsCate);
  const {category} = useParams();

  useEffect(() => {
    dispatch(fetchPostsByCategory(category));
  }, [category]);

  return (
    <div>
      <PostList posts={postsCate} />
    </div>
  );
};

export default CategoryPage;
