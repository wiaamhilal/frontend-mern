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
