import React, {useState} from "react";
import {toast} from "react-toastify";

const ResetPassword = () => {
  const [password, setpassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (!password) {
      return toast.error("password is required");
    } else {
      console.log(password);
    }
  };
  return (
    <div
      style={{maxWidth: "500px"}}
      className="m-auto shadow rounded mt-4 p-3 bg-white container"
    >
      <h2 className="text-center">Reset password</h2>
      <form onSubmit={register}>
        <label className="mb-2">New password</label>
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="enter your new password"
          className="my-input w-100 shadow"
        />
        <button className="btn btn-primary w-100 mt-3">submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
