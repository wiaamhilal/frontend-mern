import "./App.css";
import Header from "./components/Header";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";
import {ToastContainer} from "react-toastify";
import CategoryPage from "./components/CategoryPage";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import {UsersTable} from "./components/UsersTable";
import {PostsTable} from "./components/PostsTable";
import {CategoriesTable} from "./components/CategoriesTable";
import {CommentsTable} from "./components/CommentsTable";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import {useSelector} from "react-redux";

function App() {
  const {user} = useSelector((state) => state.auth);
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
          path="/posts"
          element={
            <>
              <Header /> <Posts />
            </>
          }
        />
        <Route
          path="/create-post"
          element={
            <>
              <Header /> <CreatePost />
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
              <Header /> <CategoryPage />
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
              <Header /> <Dashboard />
            </>
          }
        />
        <Route
          path="/dashboard/user-table"
          element={
            <>
              <Header /> <UsersTable />
            </>
          }
        />
        <Route
          path="/dashboard/posts-tabe"
          element={
            <>
              <Header /> <PostsTable />
            </>
          }
        />
        <Route
          path="/dashboard/categories-tabe"
          element={
            <>
              <Header /> <CategoriesTable />
            </>
          }
        />
        <Route
          path="/dashboard/comment-table"
          element={
            <>
              <Header /> <CommentsTable />
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
          path="/reset-password"
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
      </Routes>
    </div>
  );
}

export default App;
