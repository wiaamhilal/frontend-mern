import React, {useEffect, useState} from "react";
import PostItem from "./PostItem";
import Paganation from "./Paganation";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchPosts,
  fetchPostsByCategory,
  getPostsCount,
} from "../redux/apiCalls/postApiCall";
import {SideBar} from "./SideBar";
import {categories} from "../dummyData";
import {useParams} from "react-router-dom";
const CategoryPage2 = () => {
  const {postsCount, postsCate} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const POST_PER_PAGE = 3;

  const [currentPage, setcurrentPage] = useState(1);
  const pages = Math.ceil(postsCate.length / POST_PER_PAGE);

  useEffect(() => {
    dispatch(getPostsCount());
  }, [getPostsCount]);

  const {category} = useParams();

  useEffect(() => {
    dispatch(fetchPostsByCategory(category));
  }, [category]);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage]);

  console.log(pages, postsCate);

  return (
    <div>
      <div className="row">
        <div className="col-10">
          <h2>latest post</h2>
          {postsCate.map((item) => (
            <PostItem post={item} key={item._id} />
          ))}
        </div>
        <div className="col-2">
          <SideBar categories={categories} />
        </div>
      </div>
      <div className="col-12">
        {postsCate.length > 2 && (
          <Paganation
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            pages={pages}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage2;
