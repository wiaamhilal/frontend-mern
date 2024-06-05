import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import swal from "sweetalert";
export const CommentsTable = () => {
  const deleteComment = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("the comment has been deleted", {
          icon: "success",
        });
      } else {
        swal("something went wrong");
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
              <th scope="col">Comment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item) => (
              <tr>
                <th scope="row">{item}</th>
                <td>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    style={{width: "40px"}}
                    className="rounded-circle"
                  />
                  <span className="ms-2">wiaam hilal</span>
                </td>
                <td>comment descriotion</td>
                <td>
                  <button className="btn btn-danger" onClick={deleteComment}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
