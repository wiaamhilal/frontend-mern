import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import swal from "sweetalert";
import {
  getRetunedOrdersApi,
  sendEmailCinfirmReturnApi,
  sendEmailRejectReturnApi,
} from "../redux/apiCalls/postApiCall";
import BasketItem from "./BasketItem";
import formatCurrency from "./FormatCurrency";
import { GetBasketTotal } from "../App";
import moment from "moment";
import { Link } from "react-router-dom";
import ToggleResponceRejected from "./ToggleResponceRejected";

const ReturnOrderTable = () => {
  const [toggle, settoggle] = useState(false);
  const { returnOrdes } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(toggle);

  const approveReturn = (userEmail, orderName, orderPrice, id) => {
    dispatch(
      sendEmailCinfirmReturnApi({ userEmail, orderName, orderPrice, id })
    );
  };

  useEffect(() => {
    dispatch(getRetunedOrdersApi());
  }, [returnOrdes]);

  return (
    <Holder>
      <h2 className="text-center text-secondary fw-bold mb-3">
        Return Requirments
      </h2>
      {returnOrdes?.map((item) => (
        <div className="order-item container position-relative">
          <BasketItem
            {...item.order}
            // toggle={toggle}
            // settoggle={settoggle}
          />
          {/* <h4 className="fw-bold text-secondary mt-4">
            Total Price : {formatCurrency(GetBasketTotal(item?.order?.price))}
          </h4> */}
          <h4 className="fw-bold text-secondary mt-4">
            Required Time : {moment(item?.createdAt).format("MMMM DD  h:mma")}
          </h4>
          <div className="d-flex align-items-center mt-4">
            <h4 className="me-4 fw-bold text-secondary ">costumer profile :</h4>
            <Link to={`/profile/${item?.user?._id}`} className="text-dark">
              <img
                src={item?.user?.profilePhoto?.url}
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle"
              />{" "}
              <span className="fw-bold">{item?.user?.username}</span>
            </Link>
          </div>
          <h4 className="fw-bold text-secondary mt-3">
            Reason : {item?.reason}
          </h4>
          <button
            className="return-button btn btn-danger btn-sm"
            onClick={() => settoggle(true)}
          >
            decline
          </button>
          <button
            onClick={() =>
              approveReturn(
                item?.user?.email,
                item?.order?.title,
                item?.order?.price,
                item._id
              )
            }
            style={{ right: "90px" }}
            className="return-button btn btn-success btn-sm"
          >
            approve
          </button>
          {toggle && (
            <ToggleResponceRejected
              toggle={toggle}
              settoggle={settoggle}
              item={item}
            />
          )}
        </div>
      ))}
    </Holder>
  );
};
const Holder = styled.div`
  overflow: hidden;
  padding-top: 80px;
  min-height: 100vh;
  & .order-item {
    width: 100%;
    background: #f2f2f2;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  & .return-button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

export default ReturnOrderTable;
