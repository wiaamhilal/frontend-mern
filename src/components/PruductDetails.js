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
import boldStar from "../img/star (1).png";
import {
  deletePostApi,
  fetchAllPosts,
  fetchPosts,
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
import PostItem from "./PostItem";

const ParamsComp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((user) => user.auth);
  const { post, basket, posts } = useSelector((state) => state.post);
  const [image, setimage] = useState("first");
  const [toggle, settoggle] = useState(false);
  const [orderColor, setOrderColor] = useState("Default Color");
  const likeToggle = () => {
    if (!user) {
      return toast.error("you have to sign in first");
    } else {
      dispatch(toggleLike(post?._id));
    }
  };
  console.log(post?.colors);
  const dislikeToggle = () => {
    if (!user) {
      return toast.error("you have to sign in first");
    } else {
      dispatch(toggleDislike(post?._id));
    }
  };
  console.log(post);
  const uploadImgSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("no image chosen");
    } else {
      const formData = new FormData();
      formData.append("image", image);
      await dispatch(updatePostImage(formData, post._id));
      setimage("");
      // window.location.reload(false);
    }
  };
  useEffect(() => {
    dispatch(fetchPosts(1));
  }, []);
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
    dispatch(postActions.setbasket({ ...post, orderColor }));
  };
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id]);

  let rate =
    (post?.likes?.length / (post?.dislikes?.length + post?.likes?.length)) * 5;

  const allRates = post?.dislikes?.length + post?.likes?.length;
  return (
    <Holder>
      <div className="">
        <Main className="container">
          <Head>
            {" "}
            <Photo>
              <img
                className="mb-3 my-shadw"
                src={
                  (image === "first" &&
                    (post?.image?.url || post?.images[0]?.url)) ||
                  (image === "second" && post?.images[1]?.url) ||
                  (image === "third" && post?.images[2]?.url) ||
                  (image === "forth" && post?.images[3]?.url) ||
                  (image === "fiveth" && post?.images[4]?.url)
                  // ? URL.createObjectURL(image)
                  // : post?.image?.url || post?.images[0]?.url
                }
                alt=""
                style={{}}
              />
              {/* {user?._id === post?.user._id && (
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
              )} */}
            </Photo>
            <PlusPhotos>
              {post?.images[0] && (
                <div onClick={() => setimage("first")}>
                  <img src={post?.images[0].url} alt="" />
                </div>
              )}
              {post?.images[1] && (
                <div onClick={() => setimage("second")}>
                  <img src={post?.images[1].url} alt="" />
                </div>
              )}
              {post?.images[2] && (
                <div onClick={() => setimage("third")}>
                  <img src={post?.images[2].url} alt="" />
                </div>
              )}
              {post?.images[3] && (
                <div onClick={() => setimage("forth")}>
                  <img src={post?.images[3].url} alt="" />
                </div>
              )}
              {post?.images[4] && (
                <div onClick={() => setimage("fiveth")}>
                  <img src={post?.images[4].url} alt="" />
                </div>
              )}
            </PlusPhotos>
            <div>
              {" "}
              <h2 className=" text-center text-sm-start m-0 mb-3">
                {post?.title}
              </h2>
              <span className="text-color">{post?.description}</span>
            </div>
          </Head>
          <Colors>
            {/* {post?.colors?.map((color, id) => (
              <span className="me-3">
                <input type="checkbox" id={id} value={color} />
                <label className="fw-bold fs-4" htmlFor={id}>
                  {color}
                </label>
              </span>
            ))} */}

            <div className="d-flex align-items-center mt-4">
              <h4 className="fw-bold me-3">Select the color:</h4>
              <div className="d-flex align-items-center">
                <select
                  className="inputs m-0 me-3"
                  onChange={(e) => setOrderColor(e.target.value)}
                >
                  <option value="none">default color</option>
                  {post?.colors?.map((color, id) => (
                    <option value={color}>{color}</option>
                  ))}
                </select>
                {/* <button
                  className="btn btn-sm btn-success"
                >
                  submit
                </button> */}
              </div>
            </div>
          </Colors>
          <Boxholder className="row gap-4">
            <div className="col-12 col-sm-6 col-md-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-cinter">
                <h5 className="fw-bold m-0 p-0 me-3">
                  {FormatCurrency(post?.price)}
                </h5>
                {post?.oldPrice[0] && (
                  <div className="">
                    <h5 className="text-decoration-line-through text-muted me-2">
                      {FormatCurrency(post?.oldPrice[0])}
                    </h5>
                    <h4 className="fw-bold m-0 p-0 text-danger">
                      {post?.oldPrice[1]} -%
                    </h4>
                  </div>
                )}
              </div>
              <FirstStats>
                {" "}
                <div
                  className=""
                  style={{ width: "160px", marginBottom: " 5px" }}
                >
                  {" "}
                  {Array(Math.round(rate) || 0)
                    .fill()
                    .map((_, i) => (
                      <img src={boldStar} alt="star" className="star-img" />
                    ))}
                </div>
              </FirstStats>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div class="btn-group">
                <button
                  class="btn btn-success btn-sm dropdown-toggle rounded-pill"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  free return
                </button>
                <div
                  class="dropdown-menu"
                  style={{ width: "290px", padding: "10px" }}
                >
                  You can return this item for FREE within the allowed return
                  period for any reason and without any shipping charges. The
                  item must be returned in new and unused condition.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              {" "}
              <button
                onClick={() => addToTheCard(post)}
                className="btn btn-sm btn-success rounded-pill shadow me-2"
              >
                Add To Card
              </button>
              <button
                onClick={() => addToTheCard(post) & navicate("/basket")}
                className="btn btn-sm btn-success rounded-pill shadow"
              >
                Buy Now
              </button>
            </div>
            <span className="col-12 col-sm-6 col-md-3 m-0 fw-bold">
              FREE delivery Wednesday, 4 September
            </span>
            <span className="col-12 col-sm-6 col-md-3 m-0 fw-bold">
              Or fastest delivery Tuesday, 3 September
            </span>
            <div className="col-12 col-sm-6 col-md-3">
              <span className="fw-bold d-block">
                <span className="me-4">Fulfilled by </span>{" "}
                <a href="https://weaams.com/">weaams.com</a>
              </span>{" "}
              <span className="fw-bold d-block">
                <span className="me-4"> Sold by </span>
                <span className="fw-bold">{post?.user.username}</span>{" "}
              </span>
              <span className="fw-bold d-block">
                <span className="me-4">Payment</span> transaction Secure
              </span>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              {" "}
              <h5 className="bw-bold">Add a Protection Plan:</h5>
            </div>
            <div className="col-12 col-sm-6 col-md-3 fw-bold">
              <input type="checkbox" /> 1-Year Extended Warranty by Salama Care
              (E-mail delivery) for AED 40.00
            </div>
            <div className="col-12 col-sm-6 col-md-3 fw-bold">
              <input type="checkbox" /> 2-Year Extended Warranty by Salama Care
              (E-mail delivery) for AED 66.00
            </div>
          </Boxholder>
          {/* <div className="d-flex align-items-center justify-content-between mt-3"> */}
          {/* <div className="d-flex">
              {" "}
              <h4 className="me-2">The price:</h4>
            </div> */}
          {/* </div> */}
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
          <ProductsDetails>
            <h3>Product Details :</h3>
            {post?.productDetails ? (
              <p>{post?.productDetails}</p>
            ) : (
              <p>
                {" "}
                Product Dimensions : 6.06 x 145.29 x 83.4 cm; 23 kg Date First
                Available : 25 March 2024 Manufacturer : Samsung ASIN :
                B0D1R8JNF6 Item model number : UA65DU7000UXZN Country of origin
                : Egypt Best Sellers Rank: #91 in Electronics See Top 100 in
                Electronics #2 in Smart TVs
              </p>
            )}
          </ProductsDetails>
          <BrouseItems>
            <h4>Customers who bought this item also bought :</h4>
            <div className="row gap-3 justify-content-center brousing">
              {posts?.map(
                (item) =>
                  item?.category == post?.category && (
                    <PostItem post={item} key={item?._id} />
                  )
              )}
            </div>
          </BrouseItems>
          <MoreImages>
            <h3 className="">From the manufacturer :</h3>
            <div className="img-container">
              <img src={post?.images[1]?.url} alt="" />
              <img src={post?.images[2]?.url} alt="" />
              <img src={post?.images[3]?.url} alt="" />
              <img src={post?.images[4]?.url} alt="" />
            </div>
          </MoreImages>
          <Rating className="mt-4">
            <h4 className="fw-bold">Customer Reviews</h4>
            <div className="d-flex align-items-center ">
              <Rate>
                {" "}
                <div className="">
                  {" "}
                  {Array(Math.round(rate) || 0)
                    .fill()
                    .map((_, i) => (
                      <img src={boldStar} alt="star" className="star-img" />
                    ))}
                </div>
              </Rate>
              {rate ? (
                <h5 style={{ margin: "5px 0 0 5px" }}>
                  {Math.round(rate)} out of 5
                </h5>
              ) : null}
            </div>
            <span>{allRates} global ratings</span>
            <div class="btn-group d-block mt-3">
              <button
                class="dropdown-toggle btn btn-success btn-sm  rounded-pill"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                How are ratings calculated?
              </button>
              <div
                class="dropdown-menu"
                style={{ width: "290px", padding: "10px" }}
              >
                To calculate the overall star rating and percentage breakdown by
                star, we dont use a simple average. Instead, our system
                considers things like how recent a review is and if the reviewer
                bought the item on Wiaam site. It also analyses reviews to
                verify trustworthiness.
              </div>
            </div>
            <div
              className="my-line mt-4 mb-4"
              style={{ maxWidth: "300px" }}
            ></div>
            <h4 className="fw-bold">Review this product</h4>
            <p>Share your thoughts with other customers</p>
            <button className="btn btn-success rounded-pill btn-sm">
              Write a customer review
            </button>
            <div
              className="my-line mt-4 mb-4"
              style={{ maxWidth: "300px" }}
            ></div>
          </Rating>
        </Main>
        <Comment postId={post?._id} />
        <CommentList comments={post?.comments} />
        <UpdatePost settoggle={settoggle} toggle={toggle} post={post} id={id} />
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

  & span {
    line-height: 1.7;
  }
`;
const Photo = styled.div`
  & img {
    border-radius: 10px;
    width: 100%;
    height: 300px;
    @media (min-width: 767px) {
      width: 500px !important;
      height: 400px;
    }
  }
`;
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
const Boxholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const BrouseItems = styled.div`
  & .brousing {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
const ProductsDetails = styled.div`
  padding-bottom: 20px;
  max-width: 500px;
  line-height: 1.7;
`;
const Rate = styled.div`
  position: relative;
  & .star-img {
    width: 22px;
    margin-right: 10px;
}
  }
`;
const FirstStats = styled.data`
  width: 160px;
  position: relative;
  & .star-img {
    width: 22px;
    margin-right: 10px;
}
  }
`;
const Rating = styled.div``;
const MoreImages = styled.div`
  & img {
    width: 100%;
    border-radius: 20px;
    max-height: 450px;
    // margin-bottom: 20px;
  }
  & .img-container {
    @media (max-width: 668px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 20px;
    // margin: 20px;
  }
`;
const PlusPhotos = styled.div`
  display: flex;
  @media (min-width: 767px) {
    flex-direction: column;
  }
  gap: 10px;
  & div {
    flex: 1;
  }
  & img {
    width: 80px;
    cursor: pointer;
    height: 65px;
    border-radius: 5px;
  }
`;
const Colors = styled.div`
  .inputs {
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    display: block;
    width: 100%;
    resize: none;
  }
`;
export default ParamsComp;
