import React, {useEffect} from "react";
import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/apiCalls/postApiCall";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [fetchPosts]);
  const {posts} = useSelector((state) => state.post);
  console.log(posts);
  return (
    <div>
      <div className="">
        <h2>latest post</h2>
        {posts.map((item) => (
          <PostItem post={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
