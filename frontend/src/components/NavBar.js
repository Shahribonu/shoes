import React from "react";
import { useState } from "react";
import Cart from "./cart/Cart";
import { Link } from "react-router-dom";
import avatar from "../assets/images/image-avatar.png";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  let Links = [
    { name: "Collection", link: "/" },
    { name: "Men", link: "/" },
    { name: "Women", link: "/" },
    { name: "Cart", link: "/cart" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex items-center justify-center">
          <div
            className="font-bold text-2xl cursor-pointer items-center font-[Poppins] 
        text-gray-800 hidden md:flex"
          >
            <Link to="/">
              <h1 className="font-bold text-3xl"> Sneakers</h1>
            </Link>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-8 top-6 cursor-pointer md:hidden flex items-center "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
          <h1 className="ml-3 text-[24px] font-bold">Sneakers</h1>
        </div>

        <div className="flex items-center md:justify-center justify-end cursor-pointer">
          <Link to="/cart">
            <ion-icon name="cart-outline" className="cursor-pointer"></ion-icon>
            <span class=" bg-orange-500 text-white text-xs font-semibold mr-2 px-2 py-1 rounded dark:bg-orange-500 dark:text-yellow-900">
              {cartTotalQuantity}
            </span>
          </Link>

          <div className="h-[40px] w-[40px] rounded-full ml-4">
            <img
              src={avatar}
              alt="avatar"
              className="objec-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
