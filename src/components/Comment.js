import React, {useState} from "react";
import {toast} from "react-toastify";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {createNewComment} from "../redux/apiCalls/commentApiCall";

const Comment = ({postId}) => {
  const {user} = useSelector((state) => state.auth);
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const sedComment = (e) => {
    e.preventDefault();
    if (!user) {
      return toast.error("you have to sign in first");
    }
    if (text === "") {
      toast.error("write your comment first");
    } else {
      dispatch(createNewComment({text, postId}));
      settext("");
    }
  };
  return (
    <Main className="mt-4">
      <form onSubmit={sedComment}>
        <input
          type="text"
          placeholder="add a comment"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button className="btn btn-primary btn-sm">add</button>
      </form>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 0px 1px 3px 3px;
    border-radius: 4px;
    /* border: none; */
    border: 1px solid #ccc;
  }
`;

export default Comment;
