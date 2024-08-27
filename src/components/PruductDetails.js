import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import boldLike from "../img/like-svgrepo-com (2).svg";
import normalLike from "../img/like-svgrepo-com (3).svg";
import boldDisLike from "../img/dislike-svgrepo-com (1).svg";
import normaDislLike from "../img/dislike-svgrepo-com.svg";
import swal from "sweetalert";
import { toast } from "react-toastify";
import {
  deletePostApi,
  fetchAllPosts,
  fetchSinglePost,
  toggleDislike,
  toggleLike,
  updatePostImage,
} from "../redux/apiCalls/postApiCall";
import CommentList from "./CommentList";
import UpdatePost from "./UpdatePost";
import Comment from "./Comment";
import { postActions } from "../redux/slices/postSlice";
import FormatCurrency from "./FormatCurrency";

const ParamsComp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((user) => user.auth);
  const { post, basket } = useSelector((state) => state.post);
  const [image, setimage] = useState("");
  const [toggle, settoggle] = useState(false);
  const likeToggle = () => {
    if (!user) {
      return toast.error("you have to sign in first");
    } else {
      dispatch(toggleLike(post?._id));
    }
  };
  console.log(basket);
  const dislikeToggle = () => {
    if (!user) {
      return toast.error("you have to sign in first");
    } else {
      dispatch(toggleDislike(post?._id));
    }
  };

  const uploadImgSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("no image chosen");
    } else {
      const formData = new FormData();
      formData.append("image", image);
      await dispatch(updatePostImage(formData, post._id));
      window.location.reload(false);
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
  const addToTheCard = (post) => {
    dispatch(postActions.setbasket({ ...post }));
  };
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id]);
  return (
    <Holder>
      <div className="">
        <Main className="container">
          <Head>
            {" "}
            <Photo>
              <img
                className="mb-3 my-shadw"
                src={image ? URL.createObjectURL(image) : post?.image.url}
                alt=""
                style={{}}
              />
              {user?._id === post?.user._id && (
                <form>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={(e) => setimage(e.target.files[0])}
                  />
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    {!image && (
                      <label
                        htmlFor="file"
                        className="btn btn-success btn-sm rounded-pill"
                      >
                        change the image
                      </label>
                    )}

                    {image && (
                      <>
                        <button
                          onClick={() => window.location.reload(false)}
                          className="btn btn-danger btn-sm rounded-pill me-3 "
                        >
                          cancel Change
                        </button>
                        <input
                          onClick={uploadImgSubmit}
                          type="submit"
                          value="change now"
                          className="btn btn-success btn-sm rounded-pill"
                        />
                      </>
                    )}
                  </div>
                </form>
              )}
            </Photo>
            <div>
              <h2 className=" text-center d-block text-sm-start">
                {post?.title}
              </h2>
              <span className="text-color">{post?.description}</span>
            </div>
          </Head>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="d-flex">
              {" "}
              <h4 className="me-2">The price:</h4>
              <h5 className="mt-1">{FormatCurrency(post?.price)}</h5>
            </div>
            <button
              onClick={() => addToTheCard(post)}
              className="btn btn-sm btn-success rounded-pill shadow"
            >
              Add To Card
            </button>
          </div>
          <div className="d-flex align-items-center mt-4">
            <h4 className="me-4 ">the seller :</h4>
            <Link to={`/profile/${post?.user?._id}`} className="text-dark">
              <img
                src={post?.user.profilePhoto.url}
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle"
              />{" "}
              <span className="fw-bold">{post?.user.username}</span>
            </Link>
          </div>
          <div className="d-flex align-items-center mt-4">
            <h4 className="me-4">Publish Date :</h4>
            <h5>{new Date(post?.createdAt).toDateString()}</h5>
          </div>
          {user?._id === post?.user?._id && (
            <div className="mt-3 mb-4 ">
              <span
                className="btn btn-success me-3 btn-sm rounded-pill shadow"
                onClick={() => settoggle(true)}
              >
                update the product
              </span>
              <span
                className="btn btn-secondary btn-sm rounded-pill shadow"
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
              <div onClick={() => likeToggle()} style={{ cursor: "pointer" }}>
                {post?.likes?.includes(user?._id) ? (
                  <img src={normalLike} alt="" />
                ) : (
                  <img src={boldLike} alt="" />
                )}
              </div>
              <span className="fw-bold text-secondary m-auto mt-1">
                {post?.likes?.length}
              </span>
            </span>

            <span
              className="d-flex justify-content-center"
              style={{ flexDirection: "column" }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => dislikeToggle()}
              >
                {post?.dislikes?.includes(user?._id) ? (
                  <img src={normaDislLike} alt="" />
                ) : (
                  <img src={boldDisLike} alt="" />
                )}
              </div>
              <span className="fw-bold text-secondary m-auto">
                {post?.dislikes?.length}
              </span>
            </span>
          </Like>
        </Main>
        <Comment postId={post?._id} />
        <CommentList comments={post?.comments} />
        <UpdatePost settoggle={settoggle} toggle={toggle} post={post} />
      </div>
    </Holder>
  );
};

const Holder = styled.div`
  padding-top: 80px;
`;

const Main = styled.div`
  // padding-top: 40px;
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
