import { SlEarphonesAlt } from "react-icons/sl";
import { FaFirstAid } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
export default function Features() {
  return (
    <div className="bg-red-50 py-10 ">
      <div className="w-container mx-auto flex justify-between">
        <div>
          <div className="flex gap-5 justify-center items-center">
            <GiTrophyCup className="text-4xl" />
            <div>
              <h4 className="text-2xl text-black">High Quality</h4>
              <p className="text-sm text-gray-500">
                crafted from top materials
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-center items-center">
            <MdOutlineVerified className="text-4xl" />
            <div>
              <h4 className="text-2xl text-black">Warranty Protection</h4>
              <p className="text-sm text-gray-500">Over 2 years</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-center items-center">
            <FaFirstAid className="text-4xl" />
            <div>
              <h4 className="text-2xl text-black">Free Shipping</h4>
              <p className="text-sm text-gray-500">Order over 150 $</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-center items-center">
            <SlEarphonesAlt className="text-4xl" />
            <div>
              <h4 className="text-2xl text-black">24 / 7 Support</h4>
              <p className="text-sm text-gray-500">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
