import React, { useEffect } from "react";
import cart from "../../assets/images/icon-cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotal,
} from "../../features/cartSlice";

const Right = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(increaseCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold pb-3">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <div>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span> Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="cart-items max-h-[400px] overflow-y-scroll">
            {cart.cartItems?.map((item) => {
              return (
                <div
                  className="cart-item flex items-center m-2 border-b-2 "
                  key={item.id}
                >
                  <div className="cart-product flex items-center justify-between mx-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[100px]"
                    />
                    <div className="flex-col px-3 py-4 min-w-[120px]">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p>{item.desc}</p>
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="bg-orange-500 text-white p-2 my-2 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mx-5 text-lg">${item.price}</div>
                  <div className="mx-5 flex border-orange-500 border-solid border-2">
                    <button
                      onClick={() => handleDecreaseCart(item)}
                      className="text-lg p-3 border-none font-black"
                    >
                      -
                    </button>
                    <div className="text-xl p-3">{item.cartQuantity}</div>
                    <button
                      onClick={() => handleIncreaseCart(item)}
                      className="text-lg p-3 border-none font-black"
                    >
                      +
                    </button>
                  </div>
                  <div className="mx-5 text-xl">
                    Total : ${item.price * item.cartQuantity}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-[30px]">
            <a class="inline-flex" onClick={() => handleClearCart()}>
              <span class="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-orange-400 hover:bg-orange-400 hover:text-white transition duration-500 ease-in-out">
                Clear cart
              </span>
              <span class="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-orange-400 hover:bg-orange-400 hover:text-white transition duration-500 ease-in-out">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x w-2"
                >
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  />
                </svg>
              </span>
            </a>
            <div className="flex items-center text-lg">
              Subtotal:
              <h1 className="font-bold text-2xl px-2">
                ${cart.cartTotalAmount}
              </h1>
            </div>
          </div>

          <div className="flex justify-end border-none  mt-5 text-lg text-orange-600">
            <Link to="/">Go back to Shop</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
