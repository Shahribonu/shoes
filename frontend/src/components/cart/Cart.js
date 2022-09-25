import React from "react";
import Slider from "../Slider/Slider";
import Right from "../right/Right";
const Cart = () => {
  return (
    <div className="py-3 flex items-center justify-evenly flex-wrap w-full ">
      <Slider className="w-full sm:w-1/2 sm:mb-8" />
      <Right className="w-full sm:w-1/2 sm:mt-5" />
    </div>
  );
};

export default Cart;
