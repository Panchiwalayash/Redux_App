import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {

  const dispatch=useDispatch()
  const incrementItem=()=>{
    dispatch(cartAction.addToCart({
      name,
      id,
      price
    }))
  }
  const decreaceItem=()=>{
    dispatch(cartAction.removeFromCart(
      id
    ))
  }
  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decreaceItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementItem} >+
        
      </button>
    </div>
  );
};

export default CartItem;
