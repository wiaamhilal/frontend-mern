import "./App.css";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { UsersTable } from "./components/UsersTable";
import { PostsTable } from "./components/PostsTable";
import { CategoriesTable } from "./components/CategoriesTable";
import { CommentsTable } from "./components/CommentsTable";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import { useSelector } from "react-redux";
import CategoryPage2 from "./components/CategoryPage2";
import PostList from "./components/PostList";
import VerifyEmail from "./verfyemail/VerifyEmail";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Messages from "./components/Messages";
// import Headerr from "./components/Headerr";
import ProductDetails from "./components/PruductDetails";
import styled from "styled-components";
import Basket from "./components/Basket";
import LocationPage from "./components/LocationPage";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import SendLink from "./components/SendLink";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import OrdersStatus from "./components/OrdersStatus";
import AllUsers from "./components/AllUsers";

export const GetBasketTotal = (basket) => {
  return basket?.reduce((total, current) => {
    total += current.price;
    return total;
  }, 0);
};

function App() {
  const { user, loadingApp } = useSelector((state) => state.auth);
  console.log(user);
  let myLoadingApp = false;
  useEffect(() => {
    if (loadingApp == true) {
      myLoadingApp = true;
    } else {
      myLoadingApp = false;
    }
  }, [loadingApp, myLoadingApp]);
  console.log(loadingApp);

  return (
    <Holder className="App">
      {myLoadingApp && (
        <div className="holder-loading">
          <div className="loading-app">
            <RotatingLines
              visible={true}
              height="100"
              width="100"
              color="white"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      {/* {!user && <Navigate to="/login" />} */}
      <ToastContainer
        theme="colored"
        position="top-left"
        style={{ marginTop: "60px" }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header /> <PostList />
            </>
          }
        />
        <Route
          path="/create-post"
          element={
            <>
              <Header /> {user ? <CreatePost /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/posts/details/:id"
          element={
            <>
              <Header /> <ProductDetails />
            </>
          }
        />
        <Route
          path="/posts/category/:category"
          element={
            <>
              <Header /> <CategoryPage2 />
            </>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <>
              <Header /> <Profile />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header /> {user?.isAdmin ? <Dashboard /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/dashboard/user-table"
          element={
            <>
              <Header /> {user?.isAdmin ? <UsersTable /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/dashboard/posts-tabe"
          element={
            <>
              <Header /> {user?.isAdmin ? <PostsTable /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/dashboard/categories-tabe"
          element={
            <>
              <Header />
              {user?.isAdmin ? <CategoriesTable /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/dashboard/comment-table"
          element={
            <>
              <Header />{" "}
              {user?.isAdmin ? <CommentsTable /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <Register />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header /> {!user ? <Login /> : <Navigate to="/" />}
            </>
          }
        />
        <Route
          path="/forget-password"
          element={
            <>
              <Header /> <ForgetPassword />
            </>
          }
        />
        <Route
          path="/reset-password/:userId/:token"
          element={
            <>
              <Header /> <ResetPassword />
            </>
          }
        />
        <Route
          path="*"
          element={<h1 className="mt-5 text-center ">404 page not found</h1>}
        />
        <Route
          path="/users/:userId/verify/:token"
          element={
            <>
              <Header /> <VerifyEmail />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header /> <AboutUs />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <Header /> <ContactUs />
            </>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <Header /> <Messages />
            </>
          }
        />
        <Route
          path="/basket"
          element={
            <>
              <Header /> <Basket />
            </>
          }
        />
        <Route
          path="/location"
          element={
            <>
              <Header /> <LocationPage />
            </>
          }
        />{" "}
        <Route
          path="/payment"
          element={
            <>
              <Header /> <Payment />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header /> <Orders />
            </>
          }
        />
        <Route
          path="/sendlink"
          element={
            <>
              <Header /> <SendLink />
            </>
          }
        />
        <Route
          path="/dashboard/orders-status"
          element={
            <>
              <Header /> <OrdersStatus />
            </>
          }
        />
        <Route
          path="/all-users"
          element={
            <>
              <Header /> <AllUsers />
            </>
          }
        />
      </Routes>
    </Holder>
  );
}

const Holder = styled.div`
  background-image: url("https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: contain;
  padding-bottom: 5px;

  & .holder-loading {
    height: 200%;
    width: 100%;
    position: absolute;
    background: #000000b8;
    z-index: 100;
  }

  & .loading-app {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10000;
    transform: translate(-50%, -50%);
  }
`;

export default App;
