import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  AllCommentsClintsApi,
  deleteAllClinetsComments,
} from "../redux/apiCalls/commentApiCall";

const Messages = () => {
  const [message, setmessage] = useState([]);
  const dispatch = useDispatch();
  const { clinetComments } = useSelector((state) => state.comment);
  const DeleteComment = (id) => {};
  const DeleteAll = () => {
    dispatch(deleteAllClinetsComments());
  };
  useEffect(() => {
    dispatch(AllCommentsClintsApi());
  }, []);
  console.log(clinetComments);
  return (
    <Holder>
      <button
        className="btn w-100 btn-danger m-auto rounded-pill mb-3"
        onClick={DeleteAll}
      >
        Clear All
      </button>
      {clinetComments.map((item) => (
        <Main className="container mb-3" style={{ position: "relative" }}>
          <div className="d-flex align-items-center  ">
            <img
              src={item.imageURL}
              alt=""
              className="me-2 rounded-circle"
              style={{ width: "60px", height: "60px" }}
            />
            <div>
              <span className="d-block fw-bold">{item.username}</span>
              <span className="fw-bold mb-1">{item.email}</span>
              <p className="">{item.text}</p>
            </div>
          </div>
          <button
            onClick={() => DeleteComment(item.id)}
            className="btn btn-sm btn-danger"
            style={{ right: "10px", top: "10px", position: "absolute" }}
          >
            Delete
          </button>
        </Main>
      ))}
    </Holder>
  );
};
const Holder = styled.div`
  background-color: #eee;
  background-image: url("https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  z-index: -121212;
  padding-top: 80px;
  min-height: 100vh;
`;
const Main = styled.div`
  background-color: #80808038;
  border-radius: 15px;
  padding: 10px;
  & p {
    background-color: #eeeeee9e;
    padding: 3px;
    border-radius: 6px;
    margin-top: 5px;
  }
`;
export default Messages;
