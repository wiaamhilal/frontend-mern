import React, {useEffect} from "react";
import SidebarDashboard from "./SidebarDashboard";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import {useDispatch, useSelector} from "react-redux";
import {deletePostApi, fetchAllPosts} from "../redux/apiCalls/postApiCall";
export const PostsTable = () => {
  const {posts} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const deletePost = (postId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletePostApi(postId));
        window.location.reload(false);
      }
    });
  };
  return (
    <div className="row mt-5">
      <div className="col-2">
        <SidebarDashboard />
      </div>
      <div className=" col-10 container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">count</th>
              <th scope="col">User</th>
              <th scope="col">Post title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.user.profilePhoto.url}
                    alt=""
                    style={{width: "40px"}}
                    className="rounded-circle"
                  />
                  <span className="ms-2">{item?.user.username}</span>
                </td>
                <td>{item?.title}</td>
                <td>
                  <Link
                    to={`/posts/details/${item?._id}`}
                    className="btn btn-success me-3"
                  >
                    view post
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(item?._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}

            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
