import React, {useEffect, useState} from "react";
import Posts from "./Posts";
import {posts} from "../dummyData";
import {toast} from "react-toastify";
import swal from "sweetalert";
import UpdateProfile from "./UpdateProfile.js";
import {useDispatch, useSelector} from "react-redux";
import {
  changeProfilePhoto,
  getUserProfile,
} from "../redux/apiCalls/profileApiCall.js";
import {useParams} from "react-router-dom";
const Profile = () => {
  const {profile} = useSelector((state) => state.profile);
  console.log(profile);
  const {userId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [userId]);
  const [profiletoggle, setprofiletoggle] = useState(false);
  const deleteAcount = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("the acount has been deleted", {
          icon: "success",
        });
      } else {
        swal("something went wrong");
      }
    });
  };
  const [file, setfile] = useState(null);
  const ChangePhoto = (e) => {
    e.preventDefault();
    if (!file) {
      return toast.error("no image provided");
    } else {
      const formData = new FormData();
      formData.append("image", file);
      dispatch(changeProfilePhoto(formData));
    }
  };
  return (
    <div>
      <div className="p-4 rounded bg-primary text-center">
        <div
          className="position-relative m-auto"
          style={{width: "fit-content"}}
        >
          <img
            className="rounded-circle"
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
            alt=""
            style={{width: "100px", maxWidth: "100%"}}
          />
          <input
            type="file"
            id="file"
            onChange={(e) => setfile(e.target.files[0])}
            style={{display: "none"}}
          />
          <label
            htmlFor="file"
            className=" fw-bold position-absolute btn btn-sm btn-success rounded-circle"
            style={{right: "0", bottom: "0"}}
          >
            +
          </label>
          {file && (
            <span
              className="btn btn-success"
              style={{position: "absolute", top: "0"}}
              onClick={ChangePhoto}
            >
              submit
            </span>
          )}
        </div>
        <h2 className="text-white">{profile?.username}</h2>
        <h4 className="text-white">{profile?.bio}</h4>
        <h5 className="text-secondary">
          {" "}
          {new Date(profile?.createdAt).toDateString()}
        </h5>
        <button
          className="btn btn-success"
          onClick={() => setprofiletoggle(true)}
        >
          Update Profile
        </button>
      </div>
      <h1>{profile?.username} posts</h1>
      <div className="container">
        <Posts posts={posts} />
      </div>
      <button className="btn btn-danger mb-3 ms-3" onClick={deleteAcount}>
        delete profile
      </button>
      {profiletoggle && (
        <UpdateProfile
          setprofiletoggle={setprofiletoggle}
          profiletoggle={profiletoggle}
        />
      )}
    </div>
  );
};

export default Profile;
