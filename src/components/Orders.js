import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import formatCurrency from "./FormatCurrency";
import moment from "moment/moment";
import { GetBasketTotal } from "../App";
import {
  getUserProfile,
  setUserOrdersApi,
} from "../redux/apiCalls/profileApiCall";

const Orders = () => {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  // const { basket, orderDate } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getUserProfile(user._id));
  }, []);
  //   const [orders, setorders] = useState([]);
  // const mytime = profile?.orders[0].createdAt;
  // console.log(moment(Date()).format("MMMM DD  h:mma"));
  const dispatch = useDispatch();
  // console.log(Date.now() + 2323);

  // useEffect(() => {
  //   if (user) {
  //   } else {
  //   }
  // }, [user]);
  return (
    <Holder>
      {profile?.orders ? (
        <Main className="container">
          <h1 className="text-secondary fw-bold mb-5 lh-lg">
            Thank you for your order m.r {user?.username}
          </h1>
          <h2 className="mb-3 fw-bold text-secondary">Your Orders : </h2>

          <div>
            {profile?.orders?.map((item) => (
              <BasketItem {...item} />
            ))}{" "}
          </div>
          <h2 className="fw-bold text-secondary mt-4">
            Total Price : {formatCurrency(GetBasketTotal(profile?.orders))}
          </h2>
          <h2 className="fw-bold text-secondary mt-4">
            Order Time : {moment(Date.now()).format("MMMM DD  h:mma")}
          </h2>
          <h2 className="fw-bold text-secondary mt-4">
            Delever Time : {moment(Date.now() + 200000000).format("MMMM DD")}{" "}
            around 12:00pm until 5:00pm
          </h2>

          <h2 className="fw-bold text-secondary mt-4">
            Delever to : {profile?.location?.building}
          </h2>

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
`;
const Main = styled.div``;
export default Orders;
