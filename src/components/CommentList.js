import React, {useState} from "react";
import styled from "styled-components";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";
import EditComment from "./EditComment";
import swal from "sweetalert";
import {deleteCommentApi} from "../redux/apiCalls/commentApiCall";
const CommentList = ({comments}) => {
  const {user} = useSelector((state) => state.auth);
  const [commetnttoggle, setcommenttoggle] = useState(false);
  const [mycomment, setmycomment] = useState();
  const dispatch = useDispatch();
  const deleteCommentHandler = (commentId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCommentApi(commentId));
      }
    });
  };
  console.log(mycomment);
  const findMyComment = (comment) => {
    setmycomment(comment);
    setcommenttoggle(true);
  };
  return (
    <Main>
      <h2>{comments?.length} comments</h2>
      {comments?.map((comment) => (
        <Box className="shadow">
          <EditComment
            commetnttoggle={commetnttoggle}
            setcommenttoggle={setcommenttoggle}
            mycomment={mycomment}
          />
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
                onClick={() => findMyComment(comment)}
              >
                update
              </span>
              <span
                className="btn btn-danger btn-sm"
                onClick={() => deleteCommentHandler(comment._id)}
              >
                delete
              </span>
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
