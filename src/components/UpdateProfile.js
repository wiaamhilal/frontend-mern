import React, {useState} from "react";
import styled from "styled-components";

const UpdateProfile = ({setprofiletoggle, profiletoggle}) => {
  const user = {
    username: "wiaam",
    bio: "hello im a web developer",
  };
  const [username, setusername] = useState(user.username);
  const [bio, setbio] = useState(user.bio);
  const [password, setpassword] = useState("");

  const updatePost = (e) => {
    e.preventDefault();
    const updatedUser = {username, bio};

    if (password.trim() !== "") {
      updatedUser.password = password;
    }
    console.log(updatedUser);
    setprofiletoggle(false);
  };
  return (
    <Main>
      <div
        className="modal"
        tabindex="-1"
        style={profiletoggle ? {display: "block"} : {display: "none"}}
      >
        <div className="modal-dialog" style={{animation: "fade 0.5s"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Your Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setprofiletoggle(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-form" onSubmit={updatePost}>
                <input
                  type="text"
                  placeholder="user name"
                  className="input"
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                />
                <input
                  type="text"
                  placeholder="inter the bio"
                  className="input"
                  onChange={(e) => setbio(e.target.value)}
                  value={bio}
                />
                <input
                  type="password"
                  placeholder="password"
                  className="input"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setprofiletoggle(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updatePost}
              >
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  //   & .modal-dialog {
  //     animation: fade 0.5s;
  //   }
  & .my-form {
    display: flex;
    flex-direction: column;
    & .input {
      padding: 5px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      display: block;
      width: 100%;
      resize: none;
      margin-bottom: 10px;
    }
  }
`;
export default UpdateProfile;
