import React, {useState} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";

const CreatePost = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");
  const [file, setfile] = useState("");

  const submitCreatepost = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("post title is required");
    if (desc.trim() === "") return toast.error("description is required");
    if (category.trim() === "") return toast.error("category is required");
    if (!file) return toast.error("the image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", desc);
    formData.append("title", title);
    formData.append("category", category);
  };
  return (
    <div>
      <Main>
        <h1 className="text-center">Create Post</h1>
        <form onSubmit={submitCreatepost}>
          <input
            className="inputs"
            type="text"
            placeholder="post title"
            onChange={(e) => settitle(e.target.value)}
          />
          <select
            className="inputs"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option disabled>category</option>
            <option value="music">music</option>
            <option value="coffe">coffe</option>
          </select>
          <textarea
            onChange={(e) => setdesc(e.target.value)}
            className="inputs"
            placeholder="post description"
            rows={5}
          />
          <input
            type="file"
            name="file"
            id="file"
            className="file btn"
            onChange={(e) => setfile(e.target.files[0])}
          />
          <input
            type="submit"
            value="create"
            className="btn btn-primary w-100"
          />
        </form>
      </Main>
    </div>
  );
};
const Main = styled.div`
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  & .inputs {
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    display: block;
    width: 100%;
    resize: none;
    margin-bottom: 10px;
  }
  & .file {
    display: block;
  }
`;
export default CreatePost;
