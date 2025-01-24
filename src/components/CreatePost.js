import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../redux/apiCalls/postApiCall";
import { json, useNavigate } from "react-router-dom";
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
  const [file2, setfile2] = useState("");
  const [file3, setfile3] = useState("");
  const [file4, setfile4] = useState("");
  const [file5, setfile5] = useState("");
  const [productDetails, setproductDetails] = useState("");
  const [color, setcolor] = useState("");
  const [colors, setcolors] = useState([]);
  // console.log(colors);
  useEffect(() => {
    dispatch(fitchAllCategories());
  }, [categories]);

  // const submitCreatepost = (e) => {
  //   e.preventDefault();
  //   if (title.trim() === "") return toast.error("product title is required");
  //   if (price.trim() === "") return toast.error("product price is required");
  //   if (desc.trim() === "") return toast.error("description is required");
  //   if (category.trim() === "") return toast.error("category is required");
  //   if (productDetails.trim() === "")
  //     return toast.error("productDetails is required");
  //   if (!file) return toast.error("the image is required");

  //   const formData = new FormData();
  //   formData.append("images", file);
  //   // formData.append("image2", file2);
  //   formData.append("description", desc);
  //   formData.append("title", title);
  //   formData.append("price", price);
  //   formData.append("category", category);
  //   formData.append("productDetails", productDetails);
  //   dispatch(createNewPost(formData));
  // };
  // let colors = [];
  const submitColor = (e) => {
    e.preventDefault();
    setcolors([...colors, color]);
    setcolor("");
  };

  const submitCreatepost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Add multiple images
    const files = [file, file2, file3, file4, file5]; // قائمة الملفات
    files.forEach((file) => {
      formData.append("images", file); // تأكد أن الاسم "images" مطابق للـ multer.array()
    });

    // Add additional fields
    formData.append("description", desc);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("productDetails", productDetails);
    // formData.append("colors", colors);
    colors.forEach((color) => {
      formData.append("colors", color); // تأكد أن الاسم "images" مطابق للـ multer.array()
    });
    dispatch(createNewPost(formData));
  };

  useEffect(() => {
    if (isPostCreated === true) {
      navicate("/products");
    }
  }, [isPostCreated, navicate]);

  // let colors = [];
  // console.log(colors);

  return (
    <Holder className="container">
      <Main>
        <h2 className="text-center">Create A Product</h2>
        <form onSubmit={submitCreatepost}>
          <input
            className="inputs"
            type="text"
            placeholder="product title"
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
          <div className="d-flex align-items-center mb-3">
            <input
              className="inputs m-0"
              type="text"
              placeholder="inter the protuct colors (add them one by one)"
              onChange={(e) => setcolor(e.target.value)}
              value={color}
            />
            <button
              style={{ width: "117px" }}
              className="btn btn-success btn-sm rouded-pill ms-3"
              onClick={submitColor}
            >
              Add A Color
            </button>
          </div>
          <div>
            {colors?.map((item, index) => (
              <span className="me-3">
                <span>{index + 1}- </span>
                <span>{item}</span>
              </span>
            ))}
          </div>
          <textarea
            onChange={(e) => setdesc(e.target.value)}
            className="inputs"
            placeholder="post description"
            rows={5}
          />
          <textarea
            onChange={(e) => setproductDetails(e.target.value)}
            className="inputs"
            placeholder="Product details"
            rows={5}
          />
          <input
            type="file"
            name="file"
            id="file"
            className="d-none"
            onChange={(e) => setfile(e.target.files[0])}
          />
          <label htmlFor="file" className="btn btn-success w-100 mb-3 mt-1">
            Chose an image
          </label>
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
          <input
            type="file"
            name="file2"
            id="file2"
            className="d-none"
            onChange={(e) => setfile2(e.target.files[0])}
          />
          <label htmlFor="file2" className="btn btn-success w-100 mb-3 mt-1">
            Chose an image2
          </label>
          <div>
            {file2 && (
              <img
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
                className="mb-3"
                alt=""
                src={URL.createObjectURL(file2)}
              />
            )}
          </div>
          <input
            type="file"
            name="file3"
            id="file3"
            className="d-none"
            onChange={(e) => setfile3(e.target.files[0])}
          />
          <label htmlFor="file3" className="btn btn-success w-100 mb-3 mt-1">
            Chose an image3
          </label>
          <div>
            {file3 && (
              <img
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
                className="mb-3"
                alt=""
                src={URL.createObjectURL(file3)}
              />
            )}
          </div>
          <input
            type="file"
            name="file4"
            id="file4"
            className="d-none"
            onChange={(e) => setfile4(e.target.files[0])}
          />
          <label htmlFor="file4" className="btn btn-success w-100 mb-3 mt-1">
            Chose an image4
          </label>
          <div>
            {file4 && (
              <img
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
                className="mb-3"
                alt=""
                src={URL.createObjectURL(file4)}
              />
            )}
          </div>
          <input
            type="file"
            name="file5"
            id="file5"
            className="d-none"
            onChange={(e) => setfile5(e.target.files[0])}
          />
          <label htmlFor="file5" className="btn btn-success w-100 mb-3 mt-1">
            Chose an image5
          </label>
          <div>
            {file5 && (
              <img
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  borderRadius: "10px",
                }}
                className="mb-3"
                alt=""
                src={URL.createObjectURL(file5)}
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
              <button className="btn btn-primary w-100">
                Create The Product
              </button>
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
