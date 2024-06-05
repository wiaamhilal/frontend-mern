import React from "react";
import {useParams} from "react-router-dom";
import Posts from "./Posts";
import {posts} from "../dummyData";
const CategoryPage = () => {
  const {category} = useParams();

  return (
    <div>
      CategoryPage
      <Posts posts={posts} />
    </div>
  );
};

export default CategoryPage;
