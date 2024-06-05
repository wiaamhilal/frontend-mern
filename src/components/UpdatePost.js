import React, {useState} from "react";
import {toast} from "react-toastify";
import styled from "styled-components";

const UpdatePost = ({toggle, settoggle, post}) => {
  const [title, settitle] = useState(post.title);
  const [desc, setdesc] = useState(post.description);
  const [category, setcategory] = useState(post.category);

  const updatePost = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      return toast.error("post title is required");
    } else if (desc.trim() === "") {
      return toast.error("description is required");
    } else if (category.trim() === "") {
      return toast.error("category is required");
    } else {
      console.log(title, category, desc);
    }
  };
  return (
    <Main>
      <div
        className="modal"
        tabindex="-1"
        style={toggle ? {display: "block"} : {display: "none"}}
      >
        <div className="modal-dialog" style={{animation: "fade 0.5s"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => settoggle(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-form" onSubmit={updatePost}>
                <input
                  type="text"
                  placeholder="title"
                  className="input"
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                />
                <select
                  className="input"
                  onChange={(e) => setcategory(e.target.value)}
                  value={category}
                >
                  <option value="music">Music</option>
                  <option value="travelling">travelling</option>
                </select>
                <textarea
                  onChange={(e) => setdesc(e.target.value)}
                  value={desc}
                  className="input"
                  placeholder="description"
                  rows="5"
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => settoggle(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updatePost}
              >
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  //   & .modal-dialog {
  //     animation: fade 0.5s;
  //   }
  & .my-form {
    display: flex;
    flex-direction: column;
    & .input {
      padding: 5px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      display: block;
      width: 100%;
      resize: none;
      margin-bottom: 10px;
    }
  }
`;
export default UpdatePost;
