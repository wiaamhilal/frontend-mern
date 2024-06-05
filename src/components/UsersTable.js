import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import {Link} from "react-router-dom";
import swal from "sweetalert";
export const UsersTable = () => {
  const deleteUser = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("the user has been deleted", {
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
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
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
                <td>wiaam@gmial.com</td>
                <td>
                  <Link to="/profile/1" className="btn btn-success me-3">
                    view profile
                  </Link>
                  <button className="btn btn-danger" onClick={deleteUser}>
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
