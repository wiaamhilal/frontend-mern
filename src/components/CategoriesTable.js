import React from "react";
import SidebarDashboard from "./SidebarDashboard";
import swal from "sweetalert";
import {useDispatch, useSelector} from "react-redux";
import {deleteCategoryApi} from "../redux/apiCalls/categoryApiCall";
export const CategoriesTable = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector((state) => state.category);
  const deleteCategory = (categoryId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategoryApi(categoryId));
      }
    });
  };

  // }
  // });
  // };
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
              <th scope="col">Category title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCategory(item._id)}
                  >
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
