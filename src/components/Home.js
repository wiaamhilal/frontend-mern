import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/apiCalls/postApiCall";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navicate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);
  return (
    <Main>
      <p>
        Wellcome {user && <span>{user.name}</span>} to our page go ahead and see
        our products
      </p>
      <div className="d-flex algin-items-center justify-content-center">
        <Link to="/products" className="btn fw-bold the-btn mt-2">
          Go Ahead
        </Link>
      </div>
      {user ? (
        <Acount>
          <span>{user.username}</span>
          <button
            className="btn text-white"
            onClick={() => dispatch(logoutUser())}
          >
            Sign out
          </button>
        </Acount>
      ) : (
        <Acount>
          <span>Sign in to save your data</span>
          <button onClick={() => navicate("/login")} className="btn text-white">
            Sign in
          </button>
        </Acount>
      )}
    </Main>
  );
};
const Main = styled.div`
  & .carousel-item img {
    @media (max-width: 767px) {
      height: 246.66px;
    }
  }
  padding: 0 10px;
  background-image: url("https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-size: cover;
  height: 100vh;
  @media (min-width: 767px) {
    background-image: url("https://images.pexels.com/photos/1006107/pexels-photo-1006107.jpeg");
  }
  & p {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 2;
    color: white;
    padding-top: 150px;
    @media (min-width: 767px) {
      font-size: 28px;
    }
  }
  & .the-btn {
    background-image: linear-gradient(90deg, black 17%, #737373);
    border: none;
    color: white;
    opacity: 0.8;
  }
`;
const Acount = styled.div`
  position: absolute;
  bottom: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 95%;
  background-image: linear-gradient(90deg, black 17%, #737373);
  opacity: 0.8;
  border-radius: 6px;
  padding: 2px 0 2px 5px;
  @media (min-width: 767px) {
    bottom: 10px;
  }
`;

export default Home;
