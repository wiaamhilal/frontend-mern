import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import { styled } from "styled-components";
const Headerr = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    {/* <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li> */}
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
const Main = styled.div``;
export default Headerr;
