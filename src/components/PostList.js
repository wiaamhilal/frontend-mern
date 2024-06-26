import React, {useEffect, useState} from "react";
import PostItem from "./PostItem";
import Paganation from "./Paganation";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostsCount} from "../redux/apiCalls/postApiCall";
import {SideBar} from "./SideBar";
import {categories} from "../dummyData";
const PostList = () => {
  const {posts} = useSelector((state) => state.post);
  const {postsCount} = useSelector((state) => state.post);
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
    <div>
      <div className="row">
        <div className="col-10">
          <h2>latest post</h2>
          {posts?.map((item) => (
            <PostItem post={item} key={item._id} />
          ))}
          :
        </div>
        <div className="col-2">
          <SideBar categories={categories} />
        </div>
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
  );
};

export default PostList;
