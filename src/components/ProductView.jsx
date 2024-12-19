import { BsStarHalf } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

import productImg1 from "../assets/producti-view-1.png";
import productImg2 from "../assets/productview-2.png";
import Image from "./Image";
export default function ProductView() {
  return (
    <div className="w-container mx-auto flex  my-10 gap-10">
      <div className="flex w-1/2">
        <div>
          <Image src={productImg1} alt="product-view" />
        </div>
        <div>
          <Image src={productImg2} alt="product-view" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <h2 className="text-3xl text-black">Asgaard sofa</h2>
        <p className="text-sm text-gray-400">Rs. 250,000.00</p>

        <div className="flex gap-1">
          <AiFillStar className="text-yellow-400 text-sm" />
          <AiFillStar className="text-yellow-400 text-sm" />
          <AiFillStar className="text-yellow-400 text-sm" />
          <AiFillStar className="text-yellow-400 text-sm" />
          <BsStarHalf className="text-yellow-400 text-sm" />
          <RxDividerVertical className="text-2xl text-gray-400" />
          <span className="text-sm">5 Customer Review</span>
        </div>
        <p className="text-sm text-black w-2/3">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <h4 className="text-gray-400 text-xl">Size</h4>
        <div className="flex gap-5">
          <span className="text-white px-3 p-2 rounded bg-primary">L</span>
          <span className="text-black px-3 p-2 rounded bg-red-50">XL</span>
          <span className="text-black px-3 p-2 rounded bg-red-50">XS</span>
        </div>
        <h4 className="text-gray-400 text-xl">Color</h4>
        <div className="flex gap-5">
          <div className="bg-purple-600 rounded-full w-8 h-8"></div>
          <div className="bg-black rounded-full w-8 h-8"></div>
          <div className="bg-primary rounded-full w-8 h-8"></div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-5 items-center bg-white border-2 rounded-lg py-1 px-5">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <button className="bg-white border-2 rounded-lg py-2 px-8 border-black">
            Add to Cart
          </button>
          <button className="bg-white border-2 rounded-lg py-2 px-8 border-black">
            + Campare
          </button>
        </div>
        <div className="border-t-2 border-gray-300 pt-14 my-14">
          <div className="flex justify-start gap-16 text-gray-500">
            <span>SKU</span>
            <span>: SS001</span>
          </div>
          <div className="flex justify-start gap-5 text-gray-500">
            <span>Category</span>
            <span>: Sofas</span>
          </div>
          <div className="flex justify-start gap-14 text-gray-500">
            <span>Tags</span>
            <span>: Sofa, Chair, Home, Shop</span>
          </div>
          <div className="flex justify-start gap-12 text-gray-500">
            <span>Share</span>
            <div className="flex gap-5">
              : <BsFacebook /> <AiFillLinkedin /> <AiFillTwitterCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
