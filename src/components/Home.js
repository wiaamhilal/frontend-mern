import React, { useEffect } from "react";
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

const Home = () => {
  const { categories } = useSelector((state) => state.category);
  const { profiles } = useSelector((state) => state.profile);
  const { orders, allMaxOrders } = useSelector((state) => state.post);
  console.log(orders);
  console.log(orders.map((item) => item.orderDetails[0].category));
  const allCaty = allMaxOrders.map((item) => item.orderDetails[0].category);
  const allOrders = allMaxOrders.map((item) => item.orderDetails[0]);

  const screenItems = allOrders.filter((item) => item.category == "Screen");
  const totalScreens = screenItems.reduce(
    (acc, product) => acc + product.price,
    0
  );

  let screens = allCaty.filter((item) => item == "Screen");
  screens = (screens.length / allCaty.length) * 100;

  let laptops = allCaty.filter((item) => item == "laptop");
  laptops = (laptops.length / allCaty.length) * 100;

  let Audio = allCaty.filter((item) => item == "Audio");
  Audio = (Audio.length / allCaty.length) * 100;

  let Tablets = allCaty.filter((item) => item == "Tablet");
  Tablets = (Tablets.length / allCaty.length) * 100;

  let Mobiles = allCaty.filter((item) => item == "Mobile");
  Mobiles = (Mobiles.length / allCaty.length) * 100;

  let Smartwatches = allCaty.filter((item) => item == "Smartwatches");
  Smartwatches = (Smartwatches.length / allCaty.length) * 100;

  console.log(allMaxOrders);
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

  return (
    <Main>
      {/* <div class="accordion mt-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      {user ? (
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
      )}
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
      <div className="shadow-line"></div>
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
        className="shadow-line"
        style={{ transform: "translateY(361px)" }}
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
        <div className="text-center mt-3">
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
        class="featurs"
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

      <div className="progres-holder container">
        <h2 class="main-title">our sales</h2>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h4 className="me-4">Screens :</h4>
            <h5 className="m-0 mb-1">{FormatCurrency(totalScreens)}</h5>
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
        <div className="d-flex align-items-center justify-content-between">
          <h4>laptops</h4>
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
        <div className="d-flex align-items-center justify-content-between">
          <h4>Audio</h4>
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
        <div className="d-flex align-items-center justify-content-between">
          <h4>Tablets</h4>
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
        <div className="d-flex align-items-center justify-content-between">
          <h4>Mobiles</h4>
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
        <div className="d-flex align-items-center justify-content-between">
          <h4>Smartwatches</h4>
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
    </Main>
  );
};

const Main = styled.div`
  & .card-img-top {
  height: 161px;}
  & .card-text {
  font-weight:bold;}
  & .shadow-line {
    height: 72px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    margin-bottom: -36px;
    z-index: 11111;
    position: relative;
    transform: translateY(397px);
    width: 107%;
    left: -10px;
    );
  }
  & .carousel-item img {
    @media (max-width: 767px) {
      height: 246.66px;
    }
  }
  padding: 0 10px;
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
    transform: translateY(650px);
    & .percent {
    font-size: 13px;
    color: #2196f3;
    border: 1px solid #2196f3;
    border-radius: 4px;
    padding: 1px 2px;
    font-weight: bold;
      }
    }
      & .progress {
          background: #0d6efd52;
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

export default Home;
