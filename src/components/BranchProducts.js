import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fitchAllCategories } from "../redux/apiCalls/categoryApiCall";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const MainProducts = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fitchAllCategories());
  }, []);
  const { mainTitle } = useParams();
  const filterdcate = categories.filter((item) => item.mainTitle === mainTitle);
  console.log(filterdcate);
  return (
    <Main className=" container">
      {" "}
      {filterdcate?.map((item) => (
        <Link
          className="child-cate"
          to={`/products/branch/${item?.branchTitle}`}
        >
          <div class="card">
            <img
              src={
                item?.images[1] ? item?.images[1]?.url : item?.images[0]?.url
              }
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">{item?.branchTitle}</h4>
            </div>
          </div>
        </Link>
      ))}
    </Main>
  );
};

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 5px;
  // margin-right: 10px;
  // margin-left: 10px;
  padding-top: 100px;
  width: 100%;
  margin: auto;
  gap: 10px;
  & img {
    height: 161px;
  }
`;

export default MainProducts;
// col-12 col-sm-6 col-md-4 col-lg-3 mb-4
