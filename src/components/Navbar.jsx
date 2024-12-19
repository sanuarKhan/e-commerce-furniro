import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import logo from "../assets/logo.png";
import Image from "./Image";
import Navlist from "./Navlist";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

export default function Navbar() {
  const listItemValue = ["Home", "Shop", "About", "Contact"];
  const [showShoppingCart, setShowShopingCart] = useState(false);

  const shoppingCartEvent = () => {
    setShowShopingCart(!showShoppingCart);
  };

  return (
    <div className="bg-white py-3 w-100">
      <div className="flex justify-between w-container mx-auto my-5 text-xl">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <Navlist li={listItemValue} className="flex gap-10" />
        <div className="flex gap-10">
          <FaUserShield />
          <BiSearch />
          <AiOutlineHeart />
          <AiOutlineShoppingCart onClick={shoppingCartEvent} />
        </div>
        {showShoppingCart && <ShoppingCart />}
        <div
          className="absolute end-10 top-5 w-10 h-10"
          onClick={shoppingCartEvent}
        ></div>
      </div>
    </div>
  );
}
