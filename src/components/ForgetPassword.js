import React, {useState} from "react";
import {toast} from "react-toastify";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("email is required");
    } else {
      console.log(email);
    }
  };
  return (
    <div
      style={{maxWidth: "500px"}}
      className="m-auto shadow rounded mt-4 p-3 bg-white container"
    >
      <h2 className="text-center">forget password</h2>
      <form onSubmit={register}>
        <label className="mb-2">email</label>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="enter your email"
          className="my-input w-100 "
        />
        <button className="btn btn-primary w-100 mt-3">Register</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
