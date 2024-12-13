import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import {
  deleteProfileApi,
  getUserProfile,
  updateProfile,
} from "../redux/apiCalls/profileApiCall";
import { logoutUser } from "../redux/apiCalls/authApiCall";
const Settings = ({ toggleTheme, isDarkMode }) => {
  const { profile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setusername] = useState(profile?.username);
  const [bio, setbio] = useState(profile?.bio);
  // const [email, setemail] = useState(profile?.email);
  const [password, setpassword] = useState("");

  const deleteAcount = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your acount !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProfileApi(user?._id));
        dispatch(logoutUser());
      }
    });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const updatedUser = { username, bio };

    if (password.trim() !== "") {
      updatedUser.password = password;
    }
    dispatch(updateProfile(profile?._id, updatedUser));
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };
  useEffect(() => {
    dispatch(getUserProfile(user?._id));
  }, [user._id]);
  return (
    <div className="">
      {/* <div>
        <h1>مرحبًا بك في الوضع {isDarkMode ? "الداكن" : "العادي"}!</h1>
        <ToggleButton onClick={toggleTheme}>
          تغيير إلى {isDarkMode ? "الوضع العادي" : "الوضع الداكن"}
        </ToggleButton>
      </div> */}
      <Main className="text-dark">
        <Box>
          <h3 class="m-0">site control</h3>
          <p class="text-secondary mt-2" style={{ fontSize: "14px" }}>
            this is control site for proformence
          </p>
          <div class="on-off d-flex align-itmes-center justify-content-between mb-4">
            <div>
              <span>website control</span>
              <span
                class="d-block text-secondary mt-1"
                style={{ fontSize: "14px" }}
              >
                open and close website type the reason
              </span>
            </div>
            {/* <label for="toggle">
              <input
                class="toggle-checkbox"
                type="checkbox"
                checked=""
                id="toggle"
              />
              <div class="toggle-switch"></div>
            </label> */}
            <div class="form-check form-switch" onClick={toggleTheme}>
              <input
                checked={JSON.parse(localStorage.getItem("theme"))}
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                class="form-check-label"
                for="flexSwitchCheckDefault"
              ></label>
            </div>
          </div>
          <textarea
            class="c-grey fs-14 p-10"
            name=""
            placeholder="close message content"
          ></textarea>
        </Box>
        <Box>
          <div className="d-flex align-items-center justify-content-between">
            <h3 class="mt-0 m-0">general info</h3>

            <input
              type="submit"
              value="Submit changes"
              className="submit-info"
              onClick={updatePost}
            />
          </div>
          <p class="mb-3 text-secondary mt-2" style={{ fontSize: "14px" }}>
            general information abuot your acount
          </p>
          <label
            class="text-secondary mb-1 d-block"
            for="one"
            style={{ fontSize: "14px" }}
          >
            Full Name
          </label>
          <input
            onChange={(e) => setusername(e.target.value)}
            style={{ fontSize: "14px" }}
            class=" text-secondary p-2 d-block w-100"
            placeholder="change your name"
            type="text"
            id="one"
            value={username}
          />
          <label
            class="text-secondary mb-1 d-block mt-3"
            for="two"
            style={{ fontSize: "14px" }}
          >
            bio
          </label>
          <input
            onChange={(e) => setbio(e.target.value)}
            class=" text-secondary p-2 d-block w-100"
            style={{ fontSize: "14px" }}
            placeholder="Change your bio"
            type="text"
            id="two"
            value={bio}
          ></input>
          <label
            class="text-secondary mb-1 d-block mt-3"
            for="three"
            style={{ fontSize: "14px" }}
          >
            eamil
          </label>
          <div className="d-flex">
            <input
              disabled={true}
              class="text-secondary p-2 d-block w-100"
              placeholder="inter your email"
              type="email"
              id="two"
              value={profile?.email}
              style={{ fontSize: "14" }}
            />
            <input
              type="submit"
              value="Delete"
              className="submit-info ms-2 text-danger"
              onClick={deleteAcount}
            />
          </div>
        </Box>
        <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
        <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
        <Box>ijijijijijijijjjijijijijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Box>
        <Box>ijijijijijijijjjijijijilklkllllllllllllllllllllllllllllllll</Box>
      </Main>
    </div>
  );
};
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px;
  padding-top: 50px;
`;
const Box = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  & textarea {
    width: 100%;
    min-height: 150px;
    outline: none;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 5px;
  }
  & .form-check-input {
    width: 60px;
    height: 25px;
    margin: 0;
  }
  & input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  & .submit-info {
    border: none;
    color: var(--blue-color);
    font-weight: bold;
    background-color: white;
    cursor: pointer;
  }
`;
const ToggleButton = styled.button`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
export default Settings;
