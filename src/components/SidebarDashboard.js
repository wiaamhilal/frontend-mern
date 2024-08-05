import React from "react";
import { Link, useNavigate } from "react-router-dom";
const SidebarDashboard = () => {
  const navicate = useNavigate();
  return (
    <div>
      <h2
        className="mb-3"
        onClick={() => navicate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        Dashboard
      </h2>
      <ul className="text-secondary ms-2 fw-bold">
        <li className="nav-item">
          <Link to="/dashboard/user-table" className="mb-3 nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/posts-tabe" className="mb-3 nav-link">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/categories-tabe" className="mb-3 nav-link">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/comment-table" className="mb-3 nav-link">
            Comments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarDashboard;
