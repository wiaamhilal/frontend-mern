import React from "react";
import { Link } from "react-router-dom";

const AllLaps = () => {
  return (
    <div>
      <Link
        className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        to={`/posts/category/laptop`}
      >
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://pimwp.s3-accelerate.amazonaws.com/2021/09/laptop1.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-text">Gaming laptops</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllLaps;
