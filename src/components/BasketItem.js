import React from "react";
import styled from "styled-components";
import normalLike from "../img/like-svgrepo-com (3).svg";
import normaDislLike from "../img/dislike-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import formatCurrency from "./FormatCurrency";
import { postActions } from "../redux/slices/postSlice";

const BasketItem = ({
  title,
  images,
  image,
  likes,
  dislikes,
  description,
  price,
  id,
  showbutton,
  orderColor,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="position-relative">
      <Link to={`/posts/details/${id}`} style={{ textDecoration: "none" }}>
        <Item className="bg-light rounded row position-relative shadow mb-3 mb-md-4">
          <img
            className="col-4 rounded"
            src={image ? image?.url : images[0]?.url}
            alt=""
          />

          <div className="position-relative col-8">
            <div className="d-flex align-items-center justify-content-between">
              <span className="fw-bold title text-decor-none text-dark">
                {title} ({orderColor})
              </span>
              <span className="fw-bold price text-decor-none text-dark">
                {formatCurrency(price)}
              </span>
            </div>
            <p class="text-secondary desc mt-sm-2">
              {description?.substring(0, 60)}
              ...{" "}
            </p>
            <div className="d-flex mt-sm-4 likes-div">
              {" "}
              <div className="me-3 d-flex align-items-center">
                <img src={normalLike} className="likes-img me-2" alt="" />{" "}
                <span>{likes?.length}</span>
              </div>
              <div className="d-flex align-items-center">
                <img src={normaDislLike} className="likes-img me-2" alt="" />{" "}
                <span>{dislikes?.length}</span>
              </div>
            </div>
          </div>
        </Item>
      </Link>
      {showbutton && (
        <button
          onClick={() => dispatch(postActions.deleteBasketItem(id))}
          className="btn btn-sm btn-secondary position-absolute"
          style={{ bottom: "5px", right: "0px", width: "fit-content" }}
        >
          delete
        </button>
      )}
    </div>
  );
};
const Item = styled.div`
  & .text-decor-none {
    text-decoration: none;
  }
  & .title {
    @media (min-width: 767px) {
      font-size: 20px;
    }
  }
  & .desc {
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
  & .price {
    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
  & img {
    border-radius: px;
    object-fit: cover;
    padding-left: 0px;

    @media (max-width: 767px) {
      height: 100px;
    }
    @media (min-width: 767px) {
      height: 150px;
    }
  }
  & .likes-img {
    width: 20px;
    object-fit: contain;
    height: fit-content;
  }
  .likes-div {
    position: absolute;
    bottom: 8px;
  }
`;
export default BasketItem;
