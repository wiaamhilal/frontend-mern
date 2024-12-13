import "./App.css";
import Header from "./components/Header";
import { Route, Routes, Navigate, json } from "react-router-dom";
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
import styled, { ThemeProvider } from "styled-components";
import Basket from "./components/Basket";
import LocationPage from "./components/LocationPage";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import SendLink from "./components/SendLink";
import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import OrdersStatus from "./components/OrdersStatus";
import AllUsers from "./components/AllUsers";
import Settings from "./components/Settings";
import { darkTheme, lightTheme } from "./utils/themes";

export const GetBasketTotal = (basket) => {
  return basket?.reduce((total, current) => {
    total += current.price;
    return total;
  }, 0);
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", JSON.stringify(!isDarkMode));
  };
  // user: localStorage.getItem("userInfo")
  //   ? JSON.parse(localStorage.getItem("userInfo"))
  //   : null,
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
    // <ThemeProvider >
    //   <AppWrapper>
    <Holder
      className="App"
      theme={
        localStorage.getItem("theme")
          ? JSON.parse(localStorage.getItem("theme"))
            ? darkTheme
            : lightTheme
          : isDarkMode
          ? darkTheme
          : lightTheme
      }
    >
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
              <Header />{" "}
              <Home
                isDarkMode={isDarkMode}
                darkTheme={darkTheme}
                lightTheme={lightTheme}
              />
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
        <Route
          path="/settings"
          element={
            <>
              <Header />{" "}
              <Settings toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </>
          }
        />
      </Routes>
    </Holder>
    //   </AppWrapper>
    // </ThemeProvider>
  );
}

const Holder = styled.div`
  background-image: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  transition: all 0.3s ease-in-out;

  // background-image: url("https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148954968.jpg?t=st=1733811291~exp=1733814891~hmac=3aa03053fbc036b77fbbb50e7ebfc0e4dc7d7be2fc803a3819b57cf6c9945463&w=996")
  //   : "https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  // background-size: contain;
  // background-image: url("  ");
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
const AppWrapper = styled.div`
  background-image: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

export default App;
