import React from "react";
import "./styles.css";
import { BsFillCartFill } from "react-icons/bs";

const Cart = (props) => {
  return (
    <div>
      <button type="button" class="btn btn-outline-dark cart">
        <BsFillCartFill />
        <p style={{ marginBottom: "0px" }}> Cart</p>
        <span className="counters">Cart</span>
      </button>
    </div>
  );
};

export default Cart;
