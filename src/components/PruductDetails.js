import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import boldLike from "../img/like-svgrepo-com (2).svg";
import normalLike from "../img/like-svgrepo-com (3).svg";
import swal from "sweetalert";
import { toast } from "react-toastify";
import {
  deletePostApi,
  fetchAllPosts,
  toggleLike,
  updatePostImage,
} from "../redux/apiCalls/postApiCall";

const ParamsComp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((user) => user.auth);
  const { post, posts } = useSelector((state) => state.post);
  const [image, setimage] = useState("");
  const [toggle, settoggle] = useState(false);

  const uploadImgSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("no image chosen");
    } else {
      const formData = new FormData();
      formData.append("image", image);
      dispatch(updatePostImage(formData, post._id));
    }
  };
  const navicate = useNavigate();
  const deletePost = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletePostApi(post?._id));
        navicate(`/profile/${user?._id}`);
        window.location.reload(false);
      }
    });
  };

  const { id } = useParams();
  return (
    <div>
      {posts?.map(
        (item) =>
          item?._id === id && (
            <div className="bg-light">
              <Main className="container">
                <Head>
                  {" "}
                  <Photo>
                    <img
                      className="mb-3"
                      src={item?.image?.url}
                      alt=""
                      style={{}}
                    />
                  </Photo>
                  <div>
                    <h2 className=" text-center d-block text-sm-start">
                      {item?.title}
                    </h2>
                    <span className="text-color">{item?.description}</span>
                  </div>
                </Head>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="mt-3">The price: 1200 dhr</h4>
                  <button
                    // onClick={() =>
                    //   dispatch(
                    //     addItem({
                    //       ...item,
                    //     })
                    //   )
                    // }
                    className="btn btn-sm btn-success rounded-pill"
                  >
                    Add To Card
                  </button>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <h4 className="me-4">Publisher :</h4>
                  <Link to={`/profile/${item?.user._id}`} className="text-dark">
                    <img
                      src={item.user.profilePhoto.url}
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-circle"
                    />{" "}
                    <span className="fw-bold">{item.user.username}</span>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <h4 className="me-4">Publish Date :</h4>
                  <h5>{new Date(item?.createdAt).toDateString()}</h5>
                </div>
                {user?._id === item?.user._id && (
                  <div className="mt-3 ">
                    <span
                      className="btn btn-success me-3 btn-sm rounded-pill"
                      onClick={() => settoggle(true)}
                    >
                      update the product
                    </span>
                    <span
                      className="btn btn-danger btn-sm rounded-pill"
                      onClick={deletePost}
                    >
                      delete the product
                    </span>
                  </div>
                )}
                <Like>
                  <span
                    className="d-flex justify-content-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img src="" alt="" />
                    <div onClick={() => dispatch(toggleLike(item._id))}>
                      {item?.likes?.includes(user?._id) ? (
                        <img src={normalLike} alt="" />
                      ) : (
                        <img src={boldLike} alt="" />
                      )}
                    </div>
                    <span className="fw-bold text-secondary m-auto mt-1">
                      {item?.likes.length}
                    </span>
                  </span>

                  <span
                    className="d-flex justify-content-center"
                    style={{ flexDirection: "column" }}
                  >
                    <dislike>dislike</dislike>
                    <span className="fw-bold text-secondary m-auto">4</span>
                  </span>
                </Like>
                <Comments>
                  <form>
                    {" "}
                    <input type="text" placeholder="Leave a comment" />
                    <button>Submit</button>
                  </form>
                </Comments>
              </Main>
            </div>
          )
      )}
    </div>
  );
};
const Main = styled.div`
  padding-top: 40px;
`;
const Head = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  & img {
    border-radius: 10px;
    width: 100%;
    height: 300px;
    @media (min-width: 767px) {
      width: 500px !important;
      height: 400px;
    }
  }
  & span {
    line-height: 1.7;
  }
`;
const Photo = styled.div``;
const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  & img {
    width: 40px;
  }
`;
const Comments = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;
  & form {
    display: flex;
    justify-content: center;
  }
  & input {
    border: 1px solid #ccc;
    border-right: none;
    background-color: white;
    // border-radius: 6px 0 0 6px;
    border-radius: 6px;
    padding: 3px;
    outline: none;
  }
  & button {
    // border-radius: 0 6px 6px 0;
    border-radius: 6px;
    padding: 3px;
    border: 1px solid #ccc;
    border-left: none;
  }
`;
const Details = styled.div``;
const CardHolder = styled.div`
  & .card-item {
    width: 16rem;
    @media (max-width: 767px) {
      font-size: 12px;
      width: 45%;
    }
    img {
      height: 170px;
      @media (max-width: 767px) {
        height: 120px;
      }
    }
  }
`;
const MainToggle = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 111111;
  background-color: rgba(0, 0, 0, 0.788);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade 0.5s;
  & .container-toggle {
    position: absolute;
    background-color: #eee;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    max-width: 100%;
  }
`;
export default ParamsComp;
