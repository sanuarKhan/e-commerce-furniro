import Image from "./Image";
import Navlist from "./Navlist";
import funiro from "../assets/Funiro..png";

const itemList = ["Link", "Home", "Shop", "About", "Contact"];
const helpItem = ["Payment Options", "Returns", "Privacy Policies"];
export default function Footer() {
  return (
    <div className="w-container mx-auto ">
      <div className="flex justify-start gap-10 w-full border-b-2 border-gray-400 py-10">
        <div className="w-1/3">
          <Image src={funiro} alt="funiro" />
          <p className="text-lg my-12 w-80">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-1/3 flex gap-14 justify-between">
          <Navlist
            li={itemList}
            className="flex flex-col gap-14 w-1/2"
            itemclass="footer-list"
          />
          <Navlist
            li={helpItem}
            className="flex flex-col gap-14 w-1/2"
            itemclass="footer-list"
          />
        </div>
        <div className="w-1/3">
          <h3 className="text-gray-400">Newsletter</h3>
          <div className="my-14">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-b-black"
            />
            <button className="text-black m-2  border-b-2 border-b-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm flex justify-start items-center my-10">
          2024 furino. All rights reverved by the developer sanuar khan
        </p>
      </div>
    </div>
  );
}
