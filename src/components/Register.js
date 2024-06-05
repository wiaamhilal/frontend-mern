import React, {useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (!username) {
      return toast.error("username is required");
    } else if (!email) {
      return toast.error("email is required");
    } else if (!password) {
      return toast.error("password is required");
    } else {
      console.log([username, email, password]);
    }
  };
  return (
    <div
      style={{maxWidth: "500px"}}
      className="m-auto shadow rounded mt-4 p-3 bg-white container"
    >
      <h2 className="text-center">create a new account</h2>
      <form onSubmit={register}>
        <label className="mb-2">username</label>
        <input
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="enter your name"
          className="my-input w-100 "
        />
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
        already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
