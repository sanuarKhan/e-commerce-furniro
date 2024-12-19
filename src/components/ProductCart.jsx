/* eslint-disable react/prop-types */
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";

import Image from "./Image";
import image1 from "../assets/syltherine.png";
import image2 from "../assets/leviosa.png";
import image3 from "../assets/lolito.png";
import image4 from "../assets/respira.png";
import image5 from "../assets/grifo.png";
import image6 from "../assets/muggo.png";
import image7 from "../assets/pingky.png";
import image8 from "../assets/potty.png";
import { Link } from "react-router";

const productsData = [
  {
    img: image1,
    title: "Syltherine",
    des: "Stylish cafe chair",
    price: 2500.0,
    delPrice: 3500.0,
    discount: 30,
  },
  {
    img: image2,
    title: "Leviosa",
    des: "Stylish cafe chair",
    price: 2500.0,
    delPrice: 0,
    discount: 0,
  },
  {
    img: image3,
    title: "Lolito",
    des: "Luxury big sofa",
    price: 7000.0,
    delPrice: 14000.0,
    discount: 50,
  },
  {
    img: image4,
    title: "Respira",
    des: "Outdoor bar table and short",
    price: 500.0,
    delPrice: 0,
    discount: 0,
  },
  {
    img: image5,
    title: "Grifo",
    des: "Night lamp",
    price: 1500.0,
    delPrice: 0,
    discount: 0,
  },
  {
    img: image6,
    title: "Muggo",
    des: "Small mug",
    price: 150.0,
    delPrice: 0,
    discount: 0,
  },
  {
    img: image7,
    title: "Pingky",
    des: "Cute bed set",
    price: 7000.0,
    delPrice: 14000.0,
    discount: 50,
  },
  {
    img: image8,
    title: "Potty",
    des: "Minimalist flower pot",
    price: 500.0,
    delPrice: 0,
    discount: 0,
  },
];

export default function ProductCart({ limit = productsData.length }) {
  return (
    <>
      {productsData.slice(0, limit).map((item, index) => (
        <Link to={`/shop/${item.title}`} key={index}>
          <div className="relative w-[285px] h-[446px] group">
            <Image
              src={item.img}
              alt={item.name}
              className="h-[301px] w-full pb-5"
            />
            {!item.discount == 0 ? (
              <span className="absolute top-2 end-4 rounded-full w-10 h-10 text-white bg-red-400 flex justify-center items-center">
                -{item.discount}%
              </span>
            ) : (
              <span className="absolute top-2 end-4 rounded-full w-10 h-10 text-white bg-teal-400 flex justify-center items-center">
                new
              </span>
            )}
            <div className="p-3">
              <h3 className=" text-xl">{item.title}</h3>
              <p className="text-gray-400 my-2">{item.des}</p>
              <div className="flex ">
                <span className="text-m w-1/2">Rp {item.price}</span>
                {!item.discount == 0 && (
                  <del className="text-gray-400">Rp {item.delPrice}</del>
                )}
              </div>
            </div>
            <div className="absolute top-0 bg-black bg-opacity-75 w-full h-full flex flex-col justify-center items-center invisible  group-hover:visible transition-all antialiased">
              <button className="text-yellow-600 bg-red-50 py-1 my-5 px-8">
                Add to card
              </button>
              <div className="flex gap-7 text-white">
                <span className="flex items-center">
                  <AiOutlineShareAlt />
                  Share
                </span>
                <Link to={`/shop/comparizon/${item.title}`}>
                  <span className="flex items-center">
                    <MdOutlineCompareArrows />
                    Compare
                  </span>
                </Link>
                <span className="flex items-center">
                  <AiOutlineHeart />
                  Like
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
