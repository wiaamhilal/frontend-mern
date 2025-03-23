import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  createNewReturnOrderApi,
  getRetunedOrdersApi,
  updatePostText,
} from "../redux/apiCalls/postApiCall";
import BasketItem from "./BasketItem";

const ToggleReturnOrder = ({
  title,
  images,
  likes,
  dislikes,
  description,
  price,
  id,
  orderColor,
  returnOrder,
  settoggle,
  toggle,
}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const handleCheck = (value) => {
    if (selected === value) {
      setSelected(null); // إلغاء التحديد إذا ضغط نفس الخيار
    } else {
      setSelected(value); // تحديد الخيار المختار
    }
  };
  console.log(selected);
  const HandleSubmit = async () => {
    // const payload = { selected, user, order: { title, price, id } };
    dispatch(
      await createNewReturnOrderApi({
        order: {
          title,
          price,
          id,
          images,
          likes,
          dislikes,
          description,
          orderColor,
          returnOrder,
        },
        reason: selected,
      })
    );
    // console.log(payload);
    setSelected(null);
    settoggle(false);
  };

  return (
    <Main>
      <div
        className="modal"
        tabindex="-1"
        style={toggle ? { display: "block" } : { display: "none" }}
      >
        <div
          className="modal-dialog"
          style={{ animation: "fade 0.5s", marginTop: "200px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Return Order</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => settoggle(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-form">
                {/* <div className="p-4 space-y-2">
                  <label className="d-flex align-items-center">
                    <input type="checkbox" className="me-2" />
                    <span>i dont like it</span>
                  </label>

                  <label className="d-flex align-items-center space-x-2 cursor-pointer ">
                    <input type="checkbox" className="me-2" />
                    <span>i dont like itdfddfd</span>
                  </label>
                </div> */}

                <div>
                  <label className="d-flex align-items-center">
                    <input
                      className="me-2"
                      type="checkbox"
                      checked={selected === "its not the same requirments"}
                      onChange={() =>
                        handleCheck("its not the same requirments")
                      }
                    />
                    its not the same requirments
                  </label>
                </div>
                <div>
                  <label className="d-flex align-items-center">
                    <input
                      className="me-2"
                      type="checkbox"
                      checked={selected === "broken"}
                      onChange={() => handleCheck("broken")}
                    />
                    broken
                  </label>
                </div>
                <div>
                  <label className="d-flex align-items-center">
                    <input
                      className="me-2"
                      type="checkbox"
                      checked={selected === "wrong item"}
                      onChange={() => handleCheck("wrong item")}
                    />
                    wrong item
                  </label>
                </div>
                <div>
                  <label className="d-flex align-items-center">
                    <input
                      className="me-2"
                      type="checkbox"
                      checked={selected === "i dont need it ant more"}
                      onChange={() => handleCheck("i dont need it ant more")}
                    />
                    i dont need it ant more
                  </label>
                </div>
                <label>Other reason</label>
                <textarea
                  className="inputs"
                  onChange={(e) => setSelected(e.target.value)}
                  disabled={
                    selected === "i dont need it ant more" ||
                    selected === "wrong item" ||
                    selected === "broken" ||
                    selected === "its not the same requirments"
                  }
                />

                {/* <label>
                  inter witch item you want to return and the reason
                </label> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
                onClick={() => settoggle(false)}
              >
                Cansel
              </button>
              <button
                type="button"
                className="btn btn-success rounded-pill"
                onClick={HandleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  //   & .modal-dialog {
  //     animation: fade 0.5s;
  //   }
  & .modal {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  & .my-form {
    display: flex;
    flex-direction: column;
    & .input {
      padding: 5px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      display: block;
      width: 100%;
      resize: none;
      margin-bottom: 10px;
    }
  }

  & .inputs {
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    display: block;
    width: 100%;
    resize: none;
    margin-bottom: 10px;
  }
  & label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
export default ToggleReturnOrder;
