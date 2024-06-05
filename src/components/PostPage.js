import React, {useState} from "react";
import {posts} from "../dummyData";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import Comment from "./Comment";
import CommentList from "./CommentList";
import swal from "sweetalert";
import UpdatePost from "./UpdatePost";
import EditComment from "./EditComment";

const PostPage = () => {
  const [image, setimage] = useState("");
  const [toggle, settoggle] = useState(false);
  const [commetnttoggle, setcommenttoggle] = useState(false);
  console.log(toggle);
  const uploadImgSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("no image chosen");
    } else {
      console.log("image has been uploaded");
    }
  };
  const deletePost = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("the post has been deleted", {
          icon: "success",
        });
      } else {
        swal("something went wrong");
      }
    });
  };
  const {id} = useParams();
  const post = posts.find((p) => p._id === parseInt(id));
  return (
    <div>
      <div className="container">
        <img
          src={image ? URL.createObjectURL(image) : post.image}
          alt=""
          style={{width: "100%", borderRadius: "20px"}}
        />
        <form onSubmit={uploadImgSubmit}>
          <input
            type="file"
            id="file"
            name="file"
            style={{display: "none"}}
            onChange={(e) => setimage(e.target.files[0])}
          />
          <div className="d-flex align-items-center justify-content-between mt-3">
            <label htmlFor="file" className="btn btn-secondary btn-sm">
              change the image
            </label>
            <input
              type="submit"
              value="change now"
              className="btn btn-primary btn-sm"
            />
          </div>
        </form>
        <h1 className="text-center">{post.title}</h1>
        <div className="d-flex align-items-center me-2 justify-content-center fw-bold mb-3">
          <img
            src={post.user.image}
            alt=""
            style={{width: "40px"}}
            className="rounded-circle me-2"
          />
          <div>
            <span className="d-block">{post.user.username}</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
        <p className="text-center mb-3">
          {post.description} hi this is the discrion is face just for shawing
          some words i
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <span>
            {/* <img src="" alt="" style={{width: "50px"}} /> */}
            {post.likes.length} Likes
          </span>
          <span>
            <span
              className="btn btn-success me-3"
              onClick={() => settoggle(true)}
            >
              update
            </span>
            <span className="btn btn-danger" onClick={deletePost}>
              delete
            </span>
          </span>
        </div>
        <Comment />
        <CommentList setcommenttoggle={setcommenttoggle} />
        <UpdatePost settoggle={settoggle} toggle={toggle} post={post} />
        <EditComment
          commetnttoggle={commetnttoggle}
          setcommenttoggle={setcommenttoggle}
        />
      </div>
    </div>
  );
};

export default PostPage;
