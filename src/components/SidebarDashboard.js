import React from "react";
import {Link} from "react-router-dom";
const SidebarDashboard = () => {
  return (
    <div>
      <h2 className="mb-3">Dashboard</h2>
      <ul>
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
