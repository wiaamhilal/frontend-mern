import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import formatCurrency from "./FormatCurrency";
import moment from "moment/moment";
import { GetBasketTotal } from "../App";
import { getUserProfile } from "../redux/apiCalls/profileApiCall";
import { getAllOrdersApi } from "../redux/apiCalls/postApiCall";
import { Link } from "react-router-dom";

const Orders = () => {
  const { orders } = useSelector((state) => state.post);

  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getUserProfile(user._id));
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersApi());
  }, []);

  return (
    <Holder>
      {profile?.orders ? (
        <Main className="container">
          <h1 className="text-secondary fw-bold mb-5 lh-lg">
            Thank you for your order m.r {user?.username}
          </h1>
          <h2 className="mb-3 fw-bold text-secondary">Your Orders : </h2>

          <div>
            {orders?.map(
              (item) =>
                item?.userDetails == user?._id && (
                  <div className="order-item">
                    <BasketItem {...item.orderDetails[0]} />
                    {item.orderDetails[1] && (
                      <BasketItem {...item.orderDetails[1]} />
                    )}
                    {item.orderDetails[2] && (
                      <BasketItem {...item.orderDetails[2]} />
                    )}
                    {item.orderDetails[3] && (
                      <BasketItem {...item.orderDetails[3]} />
                    )}
                    <h4 className="fw-bold text-secondary mt-4">
                      Total Price :{" "}
                      {formatCurrency(GetBasketTotal(item.orderDetails))}
                    </h4>
                    <h4 className="fw-bold text-secondary mt-4">
                      Order Time :{" "}
                      {moment(item.createdAt).format("MMMM DD  h:mma")}
                    </h4>

                    <div className="d-flex align-items-center mt-4">
                      <h4 className="fw-bold text-secondary me-4">
                        order status:
                      </h4>
                      {item.orderStatus == "false" && (
                        <button class="btn btn-success" type="button" disabled>
                          <span
                            class="spinner-grow spinner-grow-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          processing...
                        </button>
                      )}
                      {item.orderStatus == "confirmid" && (
                        <div>
                          <h4 className="text-success">
                            your order has been confirmid
                          </h4>
                          <div class="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: " 10%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {item.orderStatus == "shipped" && (
                        <div>
                          <h4 className="text-success">
                            your order has been shipped
                          </h4>
                          <div class="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: " 50%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {item.orderStatus == "on the way" && (
                        <div>
                          <h4 className="text-success">
                            your order went out for delevery
                          </h4>
                          <div class="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: " 75%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {item.orderStatus == "receved" && (
                        <div>
                          <h4 className="text-success">
                            your order has been receved
                          </h4>
                          <div class="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: " 100%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                      {item.orderStatus == "canceled" && (
                        <div>
                          <h3 className="text-danger">
                            your order has been canceled
                          </h3>
                          <div class="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-danger"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: " 100%" }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <h4 className="fw-bold text-secondary mt-4">
                      Delever to : {profile?.location?.building}
                    </h4>
                  </div>
                )
            )}{" "}
          </div>

          {/* <h2 className="fw-bold text-secondary mt-4">
        delevery date :
        {moment.unix(orders[0]?.created).format("MMMM DD h:mma")}
      </h2> */}
        </Main>
      ) : (
        <h1 className="fw-bold text-secondary text-center">
          {" "}
          you have no orders !
        </h1>
      )}
    </Holder>
  );
};
const Holder = styled.div`
  overflow: hidden;
  padding-top: 80px;
  background-image: url("https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  min-height: 100vh;
  & .order-item {
    width: 100%;
    background: #f2f2f2;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
`;
const Main = styled.div``;
export default Orders;
