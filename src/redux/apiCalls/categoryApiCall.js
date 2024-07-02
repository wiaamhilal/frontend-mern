import {categoryActions} from "../slices/categorySlice";
import request from "../../utils/request";
import {toast} from "react-toastify";

// fitch all categories
export function fitchAllCategories() {
  return async (dispatch) => {
    try {
      const {data} = await request.get("/api/category");
      dispatch(categoryActions.setCategories(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// add category
export function addCategoryApi(newCategory) {
  return async (dispatch, getState) => {
    try {
      const {data} = await request.post("/api/category", newCategory, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(categoryActions.addCategory(data));
      toast.success("category has been added successfuly");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// delete category
export function deleteCategoryApi(categoryId) {
  return async (dispatch, getState) => {
    try {
      const {data} = await request.delete(`/api/category/${categoryId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(categoryActions.deleteCategory(data.categoryId));
      toast.success("category has been deleted");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
