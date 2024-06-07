import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../redux/apiCalls/authApiCall";
const Login = () => {
  // const navicate = useNavigate();
  // const {user} = useSelector((state) => state.auth);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("email is required");
    } else if (!password) {
      return toast.error("password is required");
    } else {
      console.log(email, password);
      dispatch(loginUser({email, password}));
    }
  };
  // useEffect(() => {
  //   if (user) {
  //     navicate("/");
  //   }
  // });

  return (
    <div
      style={{maxWidth: "500px"}}
      className="m-auto shadow rounded mt-4 p-3 bg-white container"
    >
      <h2 className="text-center">Login to your account</h2>
      <form onSubmit={register}>
        <label className="mb-2">email</label>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="enter your email"
          className="my-input w-100 "
        />
        <label className="mb-2">password</label>
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="enter your password"
          className="my-input w-100 shadow"
        />
        <button className="btn btn-primary w-100 mt-3">Register</button>
      </form>
      <p className="mt-4 text-center">
        did you forget your password?{" "}
        <Link to="/forget-password">forget password</Link>
      </p>
    </div>
  );
};

export default Login;
