import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import swal from "sweetalert";
import UpdateProfile from "./UpdateProfile.js";
import {useDispatch, useSelector} from "react-redux";
import {Oval} from "react-loader-spinner";
import {
  changeProfilePhoto,
  deleteProfileApi,
  getUserProfile,
} from "../redux/apiCalls/profileApiCall.js";
import {useNavigate, useParams} from "react-router-dom";
import PostList from "./PostList.js";
import PostItem from "./PostItem.js";
import {logoutUser} from "../redux/apiCalls/authApiCall.js";
const Profile = () => {
  const {profile, loading, isProfileDeleted} = useSelector(
    (state) => state.profile
  );
  const {user} = useSelector((state) => state.auth);
  console.log(profile);
  const {userId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [userId]);
  const navicate = useNavigate();
  useEffect(() => {
    if (isProfileDeleted) {
      navicate("/");
    }
  }, [isProfileDeleted]);

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
        dispatch(deleteProfileApi(user?._id));
        dispatch(logoutUser());
        // swal("the acount has been deleted", {
        //   icon: "success",
        // });
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

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Oval
          visible={true}
          height="120"
          width="120"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
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
          {user?._id === profile?._id && (
            <form>
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
            </form>
          )}
        </div>
        <h2 className="text-white">{profile?.username}</h2>
        <h4 className="text-white">{profile?.bio}</h4>
        <h5 className="text-secondary">
          {" "}
          {new Date(profile?.createdAt).toDateString()}
        </h5>
        {user?._id === profile?._id && (
          <button
            className="btn btn-success"
            onClick={() => setprofiletoggle(true)}
          >
            Update Profile
          </button>
        )}
      </div>
      <h1>{profile?.username} posts</h1>
      <div className="container">
        {profile?.posts?.map((item) => (
          <PostItem
            post={item}
            username={profile?.username}
            userId={profile?._id}
          />
        ))}
      </div>
      {user?._id === profile?._id && (
        <button className="btn btn-danger mb-3 ms-3" onClick={deleteAcount}>
          delete profile
        </button>
      )}

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
