import React, {useEffect} from "react";
import Posts from "./Posts";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPostsByCategory} from "../redux/apiCalls/postApiCall";
import PostList from "./PostList";
const CategoryPage = () => {
  const {postsCate} = useSelector((state) => state.post);
  console.log(postsCate);
  const {category} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsByCategory(category));
  }, [category]);

  return (
    <div>
      CategoryPage
      <PostList posts={postsCate} />
    </div>
  );
};

export default CategoryPage;
