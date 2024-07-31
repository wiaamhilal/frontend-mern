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

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center" />
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
              <Header /> <PostPage />
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
              <Header /> {!user ? <Register /> : <Navigate to="/" />}
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
              <Header /> {!user ? <VerifyEmail /> : <Navigate to="/" />}
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
      </Routes>
    </div>
  );
}

export default App;
