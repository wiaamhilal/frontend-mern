import React from "react";
import Posts from "./Posts";
import {posts} from "../dummyData";
const CategoryPage = () => {
  return (
    <div>
      CategoryPage
      <Posts posts={posts} />
    </div>
  );
};

export default CategoryPage;
