import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity )
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(cartAction.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleClick}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
