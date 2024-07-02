import React from "react";
import {Link} from "react-router-dom";

const VerifyEmail = () => {
  const isEmailVerify = true;
  return (
    <div>
      {isEmailVerify ? (
        <>
          <h1 className="text-center mt-5">
            {" "}
            you have been verify your email please sign in
          </h1>
          <Link className="btn btn-primary" to="/signin">
            go to login page
          </Link>
        </>
      ) : (
        <>
          <h1>page not found</h1>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
