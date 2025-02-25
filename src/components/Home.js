import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { fitchAllCategories } from "../redux/apiCalls/categoryApiCall";
import { getAllProfilesApi } from "../redux/apiCalls/profileApiCall";
import boldStar from "../img/star (1).png";
import normalStar from "../img/star.png";
import {
  getAllOrdersApi,
  getMaxAllOrdersApi,
} from "../redux/apiCalls/postApiCall";
import FormatCurrency from "./FormatCurrency";
import { createNewClinetComment } from "../redux/apiCalls/commentApiCall";

const Home = () => {
  // setTimeout(() => {
  //   window.location.reload(false);
  // }, "1000");

  const { categories } = useSelector((state) => state.category);
  const { profiles } = useSelector((state) => state.profile);
  const { orders, allMaxOrders } = useSelector((state) => state.post);

  console.log(orders.map((item) => item.orderDetails[0].category));
  const allCaty = allMaxOrders.map((item) => item.orderDetails[0].category);
  const allOrders = allMaxOrders.map((item) => item.orderDetails[0]);

  const screenItems = allOrders.filter((item) => item.category == "Screen");
  const totalScreens = screenItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const laptopItems = allOrders.filter((item) => item.category == "laptop");
  const totlLaptops = laptopItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const audioItems = allOrders.filter((item) => item.category == "Audio");
  const totalAudio = audioItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const TabletItems = allOrders.filter((item) => item.category == "Tablet");
  const totalTablets = TabletItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const MobiletItems = allOrders.filter((item) => item.category == "Mobile");
  const totalMobiles = MobiletItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const SmartwatchetItems = allOrders.filter(
    (item) => item.category == "Smartwatches"
  );
  const totalSmartwatches = SmartwatchetItems.reduce(
    (acc, product) => acc + product.price,
    0
  );
  console.log(laptopItems.length);

  let screens = allCaty.filter((item) => item == "Screen");
  screens = Math.round((screens.length / allCaty.length) * 100);

  let laptops = allCaty.filter((item) => item == "laptop");
  laptops = Math.round((laptops.length / allCaty.length) * 100);

  let Audio = allCaty.filter((item) => item == "Audio");
  Audio = Math.round((Audio.length / allCaty.length) * 100);

  let Tablets = allCaty.filter((item) => item == "Tablet");
  Tablets = Math.round((Tablets.length / allCaty.length) * 100);

  let Mobiles = allCaty.filter((item) => item == "Mobile");
  Mobiles = Math.round((Mobiles.length / allCaty.length) * 100);

  let Smartwatches = allCaty.filter((item) => item == "Smartwatches");
  Smartwatches = Math.round((Smartwatches.length / allCaty.length) * 100);

  console.log(categories[0]?.title);
  useEffect(() => {
    dispatch(fitchAllCategories());
    dispatch(getAllProfilesApi());
    dispatch(getAllOrdersApi());
    dispatch(getMaxAllOrdersApi());
  }, []);

  const { user } = useSelector((state) => state.auth);
  const navicate = useNavigate();
  const dispatch = useDispatch();

  const adminProfile = profiles?.filter((item) => item?.isAdmin == true);
  const [comment, setcomment] = useState("");
  const sendComment = (e) => {
    e.preventDefault();
    dispatch(createNewClinetComment({ text: comment }));
    // toast.success("thank you for your opininiont");
    setcomment("");
  };

  return (
    <Main className="text-dark">
      <SecondHeder className="ps-2">
        <div className="over">
          {/* <Link>Best Sellers</Link>
          <Link>New Releases</Link>
          <Link>Today's Deals</Link>
          <Link>Electronics</Link>
          <Link>Prime</Link>
          <Link>Mobile Phones</Link>
          <Link>Beauty</Link>
          <Link>Health & Personal Care</Link>
          <Link>Grocery & Food</Link>
          <Link>Video Games</Link>
          <Link>Fashion</Link>
          <Link>Perfumes</Link> */}
          {categories?.map((item) => (
            <Link to={`/posts/category/${item?.title}`}>{item?.title}</Link>
          ))}
        </div>
      </SecondHeder>

      {/* {user ? (
        <>
          <p className="welcome-line">
            Wellcome {user && <span>{user.username}</span>} to our page go ahead
            and see our products
          </p>
          <div className="d-flex algin-items-center justify-content-center">
            <Link to="/products" className="btn fw-bold the-btn mt-2">
              Go Ahead
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>sign in to be able to take advantage of the feature of our site</p>
          <div className="d-flex algin-items-center justify-content-center">
            <Link to="/login" className="btn fw-bold the-btn mt-2">
              Sign in
            </Link>
          </div>
        </>
      )} */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{
          transform: "translateY(53px)",
          maskImage: "linear-gradient(180deg, #000, transparent)",
        }}
      >
        <div class="carousel-inner" onClick={() => navicate("/products")}>
          <div class="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/71C4J2fLKAL._SX3000_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/519mt4QM9rL._SX3000_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/61AUWdCogHL._SX3000_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/71e5i44D-0L._SX3000_.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <img
        className="free-del-img"
        src="https://m.media-amazon.com/images/I/71C4J2fLKAL._SX3000_.jpg"
        alt=""
      /> */}
      <div style={{ overflowX: "auto" }}>
        <BoxesHolder>
          <div
            className=" box shadow "
            onClick={() => navicate("/posts/details/6793aa94802c114d02837906")}
          >
            <h5 className="fw-bold">up to 50 % discount</h5>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="me-3">
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737730706/mc3lxk4e4mmgcggnptn0.jpg"
                  alt=""
                />
                <span className="d-block">Davidoff</span>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737730706/gnjyz6c1vrlxpaczl9kr.jpg"
                  alt=""
                />
                <span className="d-block">Eau De Toilette</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737730706/mc3lxk4e4mmgcggnptn0.jpg"
                  alt=""
                />
                <span className="d-block">Hot Water Perfume</span>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737730706/dmv8k2frtfk2r3htfqez.jpg"
                  alt=""
                />
                <span className="d-block">Feel the burning</span>
              </div>
            </div>
          </div>
          <div
            className=" box shadow "
            onClick={() => navicate("/posts/details/67934f00ebf435dc4586b1eb")}
          >
            <h5 className="fw-bold">Continue shopping deals</h5>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="me-3">
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737707263/giwdgtj56lufbxae63k3.jpg"
                  alt=""
                />
                <span className="d-block">Facial Mask Pack</span>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737707262/lcxz49ps5fhdzhekodql.jpg"
                  alt=""
                />
                <span className="d-block">Glow with Overnight </span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737707262/cjwbhqsob8djli0ekclt.jpg"
                  alt=""
                />
                <span className="d-block">Glowing Skin</span>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/difwxqb62/image/upload/v1737707262/pyips6ufhuc7ywpxwcrn.jpg"
                  alt=""
                />
                <span className="d-block">Korean Skin Care</span>
              </div>
            </div>
          </div>
          <div className=" box shadow " onClick={() => navicate("/products")}>
            <h5 className="fw-bold">use these codes for free deliveries</h5>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="me-3">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW24/JUN/1606893_BuW23_AE_GW_DQC_CL_UnderAED9_186x116_EN._SY116_CB554994419_.jpg"
                  alt=""
                />
                <span className="d-block">valid for 2 times</span>
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW24/JUN/1606893_BuW23_AE_GW_DQC_CL_UnderAED29_186x116_EN._SY116_CB554994419_.jpg"
                  alt=""
                />
                <span className="d-block">valid for 5 times</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW24/JUN/1606893_BuW23_AE_GW_DQC_CL_UnderAED49_186x116_EN._SY116_CB554994419_.jpg"
                  alt=""
                />
                <span className="d-block">valid for 7 times</span>
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW24/JUN/1606893_BuW23_AE_GW_DQC_CL_UnderAED99_186x116_EN._SY116_CB554994419_.jpg"
                  alt=""
                />
                <span className="d-block">valid for 10 times</span>
              </div>
            </div>
            <h5 className="mt-3">Subscribe & Save</h5>
            <p style={{ fontSize: "13px" }}>
              Get extra 10% off your scheduled deliveries. FREE shipping. No
              fees. No commitments.
            </p>
          </div>
          <div
            className=" box shadow "
            onClick={() => navicate("/posts/category/Smartwatches")}
          >
            <h5 className="fw-bold">
              New Arrivals | Watches & Jewelry | Up to 50% off
            </h5>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="me-3">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1717398_3765496_186x116_1X_en_AE._SY116_CB558440092_.jpg"
                  alt=""
                />
                <span className="d-block">Men's Watches</span>
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1717398_3765517_186x116_1X_en_AE._SY116_CB558440092_.jpg"
                  alt=""
                />
                <span className="d-block">Women's Watches</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1717398_3765525_186x116_1X_en_AE._SY116_CB558440092_.jpg"
                  alt=""
                />
                <span className="d-block">Men's Accessories</span>
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1717398_3765522_186x116_1X_en_AE._SY116_CB558440092_.jpg"
                  alt=""
                />
                <span className="d-block">Women's Jewelry</span>
              </div>
            </div>
            <h5 className="mt-2">Signin with your oun account</h5>
            <p style={{ fontSize: "13px" }}>
              signout and go ahead and confirm your own email and get more
              points
            </p>
          </div>
        </BoxesHolder>
      </div>

      {user ? (
        <Acount>
          <span>{user?.email}</span>
          <button
            className="btn text-white"
            onClick={() => dispatch(logoutUser())}
          >
            Sign out
          </button>
        </Acount>
      ) : (
        <Acount>
          <span>Sign in to save your data</span>
          <button onClick={() => navicate("/login")} className="btn text-white">
            Sign in
          </button>
        </Acount>
      )}
      <div className="shadow-line-start"></div>
      <div className="category row">
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/laptop`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://pimwp.s3-accelerate.amazonaws.com/2021/09/laptop1.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Laptops</h4>
            </div>
          </div>
        </Link>
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/Mobile`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://fs.npstatic.com/userfiles/7687254/image/Best_Camera_Phones_2024-w810h462.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Phones</h4>
            </div>
          </div>
        </Link>
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/Screen`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://bestmamba.com/wp-content/uploads/2023/07/Top-Computer-Monitor-for-PS5.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Screens</h4>
            </div>
          </div>
        </Link>
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/Tablet`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://nypost.com/wp-content/uploads/sites/2/2022/09/tabletfeat.jpg?quality=75&strip=all"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Tablets</h4>
            </div>
          </div>
        </Link>
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/Audio`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://www.pcworld.com/wp-content/uploads/2024/08/mult-speaker-hub-100751040-orig.jpg?quality=50&strip=all"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Audio</h4>
            </div>
          </div>
        </Link>
        <Link
          className="child-cate col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          to={`/posts/category/Smartwatches`}
        >
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://fs.npstatic.com/userfiles/7687254/image/Best_Smartwatches_2023.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">Smart watches</h4>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="shadow-line-end"
        style={{ transform: "translateY(292px)" }}
      ></div>
      <div class="team">
        <h2 class="main-title" style={{ transform: "translatey(350px)" }}>
          Admins
        </h2>
        <div class="container">
          {adminProfile?.map((item) => (
            <Link className="text-dark" to={`/profile/${item._id}`}>
              <div class="box">
                <div class="image">
                  <img
                    className="pro-img"
                    src={item?.profilePhoto?.url}
                    alt=""
                  />
                </div>
                <ul>
                  {Array(
                    Math.round(
                      (item?.likes?.length /
                        (item?.dislikes?.length + item?.likes?.length)) *
                        5
                    ) || 0
                  )
                    .fill()
                    .map((_, i) => (
                      <li>
                        <img src={boldStar} alt="" />
                      </li>
                    ))}
                  {/* <li>
                    <img src={boldStar} alt="" />
                  </li>
                  <li>
                    <img src={boldStar} alt="" />
                  </li>
                  <li>
                    <img src={boldStar} alt="" />
                  </li>
                  <li>
                    <img src={boldStar} alt="" />
                  </li>
                  <li>
                    <img
                      src="https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png"
                      alt=""
                    />
                  </li> */}
                </ul>
                <h3>{item?.username}</h3>
                <span>{item?.email}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div class="testi" id="testi">
        <h2 class="main-title" style={{ transform: "translatey(-10px)" }}>
          Team Members
        </h2>
        <div class="container">
          {profiles?.map((item, index) => (
            <>
              {index < 6 && (
                <Link className="text-dark" to={`/profile/${item._id}`}>
                  <div class="box">
                    <img
                      className="my-img"
                      src={item?.profilePhoto?.url}
                      alt=""
                    />
                    <h3>{item?.username}</h3>
                    <span>{item?.email}</span>
                    <ul>
                      {Array(
                        Math.round(
                          (item?.likes?.length /
                            (item?.dislikes?.length + item?.likes?.length)) *
                            5
                        ) || 0
                      )
                        .fill()
                        .map((_, i) => (
                          <li>
                            <img src={boldStar} alt="" />
                          </li>
                        ))}

                      {/* <li>
                        <img src={boldStar} alt="" />
                      </li>
                      <li>
                        <img src={boldStar} alt="" />
                      </li> */}
                      {/* <li>
                        <img src={boldStar} alt="" />
                      </li> */}
                      {/* <li>
                        <img
                          src="https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png"
                          alt=""
                        />
                      </li> */}
                    </ul>
                    <p>
                      ! Vel dolores maxime incidunt quos quidem odit.
                      Voluptatibus non quisquam tempore vel eum! Excepturi ex
                      sit nulla quam voluptate?
                    </p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
        <div className="text-center mt-3 text-dark">
          {" "}
          <button
            className="wiaam-btn btn"
            onClick={() => navicate("/all-users")}
          >
            see all users
          </button>
        </div>
      </div>
      {/* start fearures */}
      <div
        class="featurs text-dark"
        id="featurs"
        style={{ transform: "translate(-10px,550px)" }}
      >
        <h2 class="main-title">featurs</h2>
        <div class="container">
          <div class="box one">
            <div class="image">
              <img
                src="https://pix4free.org/assets/library/2021-06-16/originals/owner.jpg"
                alt=""
              />
            </div>
            <h3>Owner</h3>
            <p>
              after 2 years as an admin you can invest your own cash and you
              will get benefits depend on your saling sistem{" "}
            </p>
            <a href="/contactus">more</a>
          </div>
          <div class="box tow">
            <div class="image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/594da388e6f2e154771b71ad/1623869846436-PQ81Y1R9CY6A29F116WP/man-holding-admin-card.jpg"
                alt=""
              />
            </div>
            <h3>Admin</h3>
            <p>
              sold over than 100 product and invited 20 user you can requist to
              be an admin , but your activity it should still the same you will
              be removed{" "}
            </p>
            <a href="/contactus">more</a>
          </div>
          <div class="box three">
            <div class="image">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/231469315/display_1500/stock-photo-word-user-of-the-yellow-square-pixels-on-a-black-matrix-background-registration-concept-231469315.jpg"
                alt=""
              />
            </div>
            <h3>User</h3>
            <p>
              just signin and start post protucts, as a user your authority it
              will be jut seling products if the activity stop the user will be
              removed{" "}
            </p>
            <a href="/contactus">more</a>
          </div>
        </div>
      </div>
      {/* end fearures */}

      <div
        className="shadow-line-start"
        style={{ transform: "translateY(684px)" }}
      ></div>
      <div className="progres-holder">
        <div className="container">
          <h2 class="main-title">our sales</h2>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQGXYr8XH3IPfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701797640305?e=2147483647&v=beta&t=elMXeTA21QTM3RwkmQvnOHcHHzZEWIeVH0Px7NHyK6s"
            alt=""
          />
          <h3 className=" fw-bold">Screens :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totalScreens)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{screenItems.length}</h5>
            </div>
            <h4 className="percent">{screens}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: `${screens}%` }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h3 className=" fw-bold">Laptops :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totlLaptops)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{laptopItems.length}</h5>
            </div>
            <h4 className="percent">{laptops}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped "
              role="progressbar"
              style={{ width: `${laptops}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className=" fw-bold">Audio :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totalAudio)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{audioItems.length}</h5>
            </div>
            <h4 className="percent">{Audio}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: `${Audio}%` }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className=" fw-bold">Tablets :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totalTablets)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{TabletItems.length}</h5>
            </div>
            <h4 className="percent">{Tablets}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped "
              role="progressbar"
              style={{ width: `${Tablets}%` }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className=" fw-bold">Mobiles :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totalMobiles)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{MobiletItems.length}</h5>
            </div>
            <h4 className="percent">{Mobiles}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped "
              role="progressbar"
              style={{ width: `${Mobiles}%` }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3 className=" fw-bold">Audio :</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h5 className=" mb-1 ">{FormatCurrency(totalSmartwatches)}</h5>
              <h5 className="ms-3 ms-sm-5 mb-1">Sold : </h5>{" "}
              <h5 className=" mb-1 ms-4">{SmartwatchetItems.length}</h5>
            </div>
            <h4 className="percent">{Smartwatches}%</h4>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar progress-bar-striped "
              role="progressbar"
              style={{ width: `${Smartwatches}%` }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div
        className="shadow-line-end"
        style={{ transform: "translateY(588px)" }}
      ></div>
      <MessageUs className="mt-5 row container pb-4">
        <FirstPart className=" col-12 col-sm-6">
          <h1 className="mb-3 fw-bold text-center text-sm-start">Message Us</h1>
          <p style={{ lineHeight: "1.7" }}>
            If you wish to be considered for employment at Weifield, please do
            not send a message, here – instead, please complete Weifield’s job
            application and our Human Resources department will contact you
            after their review of your submitted information.
          </p>
        </FirstPart>
        <SecondPart className="col-12 col-sm-6">
          <form>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="fw-bold">Name</h6>{" "}
              {!user && (
                <div className="d-flex align-items-center">
                  <Link
                    to="/login"
                    style={{ fontSize: "12px" }}
                    className="btn btn-sm btn-primary rounded-pill mb-1"
                  >
                    Sign in
                  </Link>
                  <h6 className="fw-bold text-danger ms-2">
                    You have to sign in first
                  </h6>
                </div>
              )}
            </div>
            <input
              disabled={!user}
              type="text"
              value={user?.username}
              className="my-feild"
            />
            <h6 className="fw-bold mt-3">Email</h6>
            <input
              type="email"
              disabled={!user}
              className="my-feild"
              value={user?.email}
            />
            <h6 className="fw-bold mt-3">comments</h6>
            <textarea
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
              disabled={!user}
              className="my-feild"
            />
            <button
              onClick={sendComment}
              disabled={!user || !comment}
              className="d-block btn btn-secondary mt-3 w-100"
            >
              Submit
            </button>
          </form>
        </SecondPart>
      </MessageUs>
    </Main>
  );
};

const Main = styled.div`
  // transform: translatey(-38px);
  & .free-del-img {
    max-width: 100%;
    // opacity: 0.8;
    transform: translateY(53px);
    mask-image: linear-gradient(180deg, #000, transparent);

    & div {
      content: "";
      background: linear-gradient(to top, #f8f9fa00 0%, #5ac5be 100%);
      height: 72px;
      transform: translateY(53px);
      opacity: 0.8;
    }
  }
  overflow-x: hidden;
  & .card-img-top {
    height: 161px;
  }
  & .card-text {
    font-weight: bold;
  }
  & .shadow-line-start {
    height: 72px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    margin-bottom: -36px;
    z-index: 11111;
    position: relative;
    transform: translateY(397px);
    width: 107%;
    left: -10px;
  }
  & .shadow-line-end {
    height: 72px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    margin-bottom: -36px;
    z-index: 11111;
    position: relative;
    transform: translateY(397px);
    width: 107%;
    left: -10px;
  }

  & .carousel-item img {
    @media (max-width: 767px) {
      height: 246.66px;
    }
  }
  // padding: 0 10px;
  background-image: url("https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=600");
  height: 110vh;
  @media (min-width: 767px) {
    background-image: url("https://images.pexels.com/photos/1006107/pexels-photo-1006107.jpeg");
    background-size: cover;
  }
  & .welcome-line {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 2;
    color: white;
    padding-top: 200px;
    @media (min-width: 767px) {
      font-size: 28px;
    }
  }
  & .the-btn {
    background-image: linear-gradient(90deg, black 17%, #737373);
    border: none;
    color: white;
    opacity: 0.8;
  }

  & .category {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translatey(362px);
    background-size: contain;
    background-image: url(https://plus.unsplash.com/premium_photo-1673766647702-9e5961440e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    min-height: 100vh;
    padding-top: 50px;
    & .child-cate {
      width: fit-content;
      height: 210px;
    }
  }
  & .progres-holder {
    margin: 0 -11px;
    padding: 50px 0px;
    background-size: contain;
    background-image: url(https://images.pexels.com/photos/172294/pexels-photo-172294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    // min-height: 100vh;
    color: var(--blue-color);
    transform: translateY(650px);
    & .percent {
      font-size: 13px;
      color: #2196f3;
      border: 1px solid #2196f3;
      border-radius: 4px;
      padding: 1px 2px;
      font-weight: bold;
    }
    & img {
      max-width: 100%;
      border-radius: 10px;
      opacity: 0.8;
      margin-bottom: 20px;
    }
    & h5 {
      font-weight: bold;
    }
  }
  & .progress {
    background: #0d6efd52;
  }

  & .our-sales {
    background-size: contain;
    background-image: url(https://plus.unsplash.com/premium_photo-1673766647702-9e5961440e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    // min-height: 100vh;
    padding-top: 50px;
  }
`;
const Acount = styled.div`
  transform: translate(10px, 343px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 95%;
  background-image: linear-gradient(90deg, black 17%, #737373);
  opacity: 0.8;
  border-radius: 6px;
  padding: 2px 0 2px 5px;
  @media (min-width: 767px) {
    bottom: 10px;
  }
  // & .skills {
  //   transform: translatey(630px);
  //   flex: 1;
  //   & h3 {
  //     justify-content: space-between;
  //     display: flex;
  //     align-items: center;
  //     & .progres {
  //       background-color: #d5d5d5;
  //       height: 25px;
  //       position: relative;
  //       & span {
  //         position: absolute;
  //         background-color: blue;
  //         height: 100%;
  //       }
  //     }
  //   }
  // }
`;
const SecondHeder = styled.div`
  & .over {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    color: white;
    // width: 95%;
    background-image: linear-gradient(90deg, black 17%, #737373);
    opacity: 0.8;
    // border-radius: 6px;
    padding: 2px 0 2px 5px;
    min-width: 100%;
    width: fit-content;
  }
  & a {
    color: white;
    margin-right: 20px;
  }

  overflow-x: auto;
  transform: translate(-11px, 54px);
  width: 107%;

  // width: 1278px;
`;
const MessageUs = styled.div`
  position: relative;
  transform: translatey(663px);
  color: white;
  margin: auto;
`;
const FirstPart = styled.div``;
const SecondPart = styled.div`
  & .my-feild {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #eee;
    outline: none;
    padding: 5px;
  }
  & textarea {
    resize: none;
    min-height: 150px;
  }
`;
const BoxesHolder = styled.div`
  min-width: 1300px;
  // padding-top: 330px;
  // transform: translateY(-250px);
  @media (max-width: 668px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  // margin: 20px;
  & .box {
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    & span {
      font-size: 14px;
    }
    & img {
      width: 100%;
    }
  }
`;
export default Home;
