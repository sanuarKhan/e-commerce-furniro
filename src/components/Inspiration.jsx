import { MdOutlineNavigateNext } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import room1 from "../assets/room-1.png";
import room2 from "../assets/room-2.png";
import room3 from "../assets/room-3.png";
import Image from "./Image";
export default function Inspiration() {
  return (
    <div className="bg-yellow-50 py-14">
      <div className="flex w-container mx-auto justify-between">
        <div className="w-3/10 p-10 flex flex-col justify-center">
          <h2 className="text-4xl w-96 py-5 ">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-sm w-80">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="px-10 py-2 bg-primary w-[176px] my-10 text-white">
            Explore More
          </button>
        </div>
        <div className="w-3/10 relative ">
          <Image src={room1} alt="room 1" className="relative" />
          <div className="absolute bottom-5 start-10 flex">
            <div className="text-black  bg-gray-100 bg-opacity-90 p-5 relative">
              <span className="flex gap-1 text-lg items-center">
                01 <AiOutlineLine className="text-black text-xl" /> Bed Room
              </span>
              <h3 className="text-2xl">Inner Peace</h3>
              <AiOutlineArrowRight className=" bg-primary text-white absolute bottom-0 -right-8  text-center w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="w-3/10">
          <div className="relative">
            <Image src={room2} alt="room 2" />
            <MdOutlineNavigateNext className="rounded-full absolute -end-8 text-4xl bottom-44 bg-white text-black w-14 h-14" />
          </div>
          <div className="py-10 flex">
            <FaRegDotCircle className=" text-primary text-3xl me-1" />

            {Array(3)
              .fill(null) // Fill the array with `null` or any value
              .map((item, index) => (
                <div
                  className="rounded-full bg-gray-400 w-3 h-3 m-2"
                  key={index}
                ></div>
              ))}
          </div>
        </div>
        <div className="w-2/10 ">
          <Image src={room3} />
        </div>
      </div>
    </div>
  );
}
