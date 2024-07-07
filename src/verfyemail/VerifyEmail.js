import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {verifyEmailApi} from "../redux/apiCalls/authApiCall";
const VerifyEmail = () => {
  const {isEmailVerified} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {userId, token} = useParams();

  useEffect(() => {
    dispatch(verifyEmailApi(userId, token));
  }, [userId, token]);
  return (
    <div>
      {isEmailVerified ? (
        <>
          <h1 className="text-center mt-5">
            {" "}
            you have been verify your email please sign in
          </h1>
          <Link className="btn btn-primary" to="/login">
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
