import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import {useSelector} from "react-redux";
const CommentList = ({setcommenttoggle, comments}) => {
  const {user} = useSelector((state) => state.auth);
  return (
    <Main>
      <h2>{comments?.length} comments</h2>
      {comments?.map((comment) => (
        <Box className="shadow">
          <div className="d-flex align-items-center justify-content-between">
            <h5>{comment.username}</h5>{" "}
            <span>
              {
                <Moment fromNow ago>
                  {comment.createdAt}
                </Moment>
              }{" "}
              ago
            </span>
          </div>
          <p>{comment.text}</p>
          {user?._id === comment.user && (
            <div>
              <span
                className="me-3 btn btn-success btn-sm"
                onClick={() => setcommenttoggle(true)}
              >
                update
              </span>
              <span className="btn btn-danger btn-sm">delete</span>
            </div>
          )}
        </Box>
      ))}
    </Main>
  );
};
const Main = styled.div`
h2 {
    border-bottom: 1px solid #b1adad;
    padding-bottom: 10px;
}
}`;
const Box = styled.div`
  width: 100%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export default CommentList;
