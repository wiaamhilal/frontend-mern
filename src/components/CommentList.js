import React from "react";
import styled from "styled-components";

const CommentList = ({setcommenttoggle}) => {
  return (
    <Main>
      <h2>2 comments</h2>
      {[1, 2].map((item) => (
        <Box className="shadow">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Wiaam hilal</h5> <span>2 hours ago</span>
          </div>
          <p>hi this is very good</p>
          <div>
            <span
              className="me-3 btn btn-success btn-sm"
              onClick={() => setcommenttoggle(true)}
            >
              update
            </span>
            <span className="btn btn-danger btn-sm">delete</span>
          </div>
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
