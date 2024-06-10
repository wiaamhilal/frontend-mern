import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutUser} from "../redux/apiCalls/authApiCall";

const Headerr = () => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Posts
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
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
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
                    Create
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
            </ul>
            {user && (
              <li className="nav-item dropdown d-flex align-items-center me-md-3">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user?.profilePhoto?.url}
                    alt=""
                    style={{width: "50px", height: "50px"}}
                    className="rounded-circle me-2"
                  />
                  <span>{user?.username}</span>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/profile/${user?._id}`}
                    >
                      profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/register"
                      onClick={() => dispatch(logoutUser())}
                    >
                      logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}
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
    </div>
  );
};

export default Headerr;
