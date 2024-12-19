/* eslint-disable react/prop-types */
import { MdCancel } from "react-icons/md";
import { BiFirstAid } from "react-icons/bi";

import { cartImgs } from "../assets";

import Image from "./Image";
import { Link } from "react-router";
// import { useState } from "react";

export default function ShoppingCart() {
  // const [showShopping, setShowShopingCart] = useState(true);
  // const closeCart = () => {
  //   setShowShopingCart(!showcart);
  // };

  // if (true) {
  return (
    <>
      <div className="w-full h-full bg-black bg-opacity-30 absolute top-0 start-0"></div>
      <div className="w-[450px] h-[746px] px-10 bg-white absolute top-0 end-0 gap-10 flex flex-col">
        <div className="flex justify-between py-5 ">
          <h2 className="border-b-2 border-gray-300 w-92 pb-10">
            Shopping Cart
          </h2>
          <BiFirstAid className="text-gray-500" />
        </div>
        <div className="flex justify-start gap-5 items-center">
          <Image src={cartImgs.cart1} />
          <div>
            <h3>Asgaard sofa</h3>
            <p>
              1 x <span className="text-primary text-sm">Rs. 270,000.00</span>
            </p>
          </div>
          <MdCancel className=" text-gray-500 ms-10" />
        </div>
        <div className="flex justify-start gap-5 items-center mb-20">
          <Image src={cartImgs.cart2} />
          <div>
            <h3>Casaliving Wood</h3>
            <p>
              1 x <span className="text-primary text-sm">Rs. 270,000.00</span>
            </p>
          </div>
          <MdCancel className=" text-gray-500" />
        </div>

        <div className="flex justify-between mt-20">
          <h3>Subtotal</h3>
          <p className="text-primary text-sm">Rs. 520,000.00</p>
        </div>
        <div className="flex justify-between items-center  border-gray-500 border-t-2 pt-5">
          <button className="rounded-2xl py-1 px-3 border-2 border-black">
            Cart
          </button>
          <button className="rounded-2xl py-1 px-3 border-2 border-black">
            Checkout
          </button>
          <Link to="/shop/comparizon/">
            <button className="rounded-2xl py-1 px-3 border-2 border-black">
              Comparison
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  // } else {
  //   <div></div>;
  // }
}
