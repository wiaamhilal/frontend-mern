import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fitchAllCategories} from "../redux/apiCalls/categoryApiCall";
export const SideBar = () => {
  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fitchAllCategories());
  });
  return (
    <div className="">
      <h2 style={{borderBottom: "1px solid #eee"}}>categories</h2>
      {categories?.map((item) => (
        <Link
          to={`/posts/category/${item?.title}`}
          className="btn btn-secondary w-100 mb-2"
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};
