import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import { styled } from "styled-components";
import cardIcon from "../img/shopping-card-svgrepo-com (1).svg";
const Headerr = () => {
  const { user } = useSelector((state) => state.auth);
  const { basket } = useSelector((state) => state.post);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navicate = useNavigate();
  return (
    <Main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-nav ">
        <div className="container-fluid  justify-content-end">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {user ? (
                <Link to="#">
                  <img
                    src={user?.profilePhoto?.url}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                    className="rounded-circle me-2"
                  />
                  {/* <span>{user?.username}</span> */}
                </Link>
              ) : (
                <Link to="/sign in">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                    className="rounded-circle me-2"
                  />
                </Link>
              )}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              {!user && (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sign in
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        register
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/create-post"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Create product
                  </Link>
                </li>
              )}
              {user?.isAdmin && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/dashboard"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Admin Dashboard
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactus"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </Link>
              </li>
              {profile?.orders && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/orders"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Your Order
                  </Link>
                </li>
              )}

              <Basket
                className="mb-2 mb-md-0"
                onClick={() => navicate("/basket")}
              >
                <img src={cardIcon} alt="" />
                {basket.length ? <span>{basket?.length}</span> : null}
              </Basket>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Main>
  );
};
const Main = styled.div`
  & .my-nav {
    position: fixed;
    width: 100%;
    z-index: 99999;
    top: 0;
  }
`;
const Basket = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
  & span {
    position: absolute;
    bottom: -3px;
    right: -4px;
    color: white;
    background-color: red;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & img {
    width: 30px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;
export default Headerr;
