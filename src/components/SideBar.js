import React from "react";
import {Link} from "react-router-dom";

export const SideBar = ({categories}) => {
  return (
    <div className="">
      <h2 style={{borderBottom: "1px solid #eee"}}>categories</h2>
      {categories.map((item) => (
        <Link
          to={`/posts/category/${item.title}`}
          className="btn btn-secondary w-100 mb-2"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
