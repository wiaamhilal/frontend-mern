import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../redux/apiCalls/postApiCall";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { fitchAllCategories } from "../redux/apiCalls/categoryApiCall";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { loading, isPostCreated } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(null);
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");
  const [file, setfile] = useState("");

  useEffect(() => {
    dispatch(fitchAllCategories());
  }, [categories]);

  const submitCreatepost = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("product title is required");
    if (price.trim() === "") return toast.error("product price is required");
    if (desc.trim() === "") return toast.error("description is required");
    if (category.trim() === "") return toast.error("category is required");
    if (!file) return toast.error("the image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", desc);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    dispatch(createNewPost(formData));
  };
  useEffect(() => {
    if (isPostCreated === true) {
      navicate("/products");
    }
  }, [isPostCreated, navicate]);
  return (
    <Holder>
      <Main>
        <h1 className="text-center">Create Post</h1>
        <form onSubmit={submitCreatepost}>
          <input
            className="inputs"
            type="text"
            placeholder="post title"
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="inputs"
            type="number"
            placeholder="procuct price"
            onChange={(e) => setprice(e.target.value)}
          />
          <select
            className="inputs"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="none">category</option>
            {categories.map((item) => (
              <option value={item.title}>{item.title}</option>
            ))}
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
          <div>
            {file && (
              <img
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
                className="mb-3"
                alt=""
                src={URL.createObjectURL(file)}
              />
            )}
          </div>
          <div className="">
            {loading ? (
              <button className="btn btn-success w-100 p-0">
                {" "}
                <RotatingLines
                  visible={true}
                  height="35"
                  width="35"
                  color="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </button>
            ) : (
              <button className="btn btn-success w-100">submit</button>
            )}
          </div>
        </form>
      </Main>
    </Holder>
  );
};
const Holder = styled.div`
  padding-top: 80px;
`;
const Main = styled.div`
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 10px;
  border-radius: 10px;
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
