import setup1 from "../assets/setup-1.png";
import setup2 from "../assets/setup-2.png";
import setup3 from "../assets/setup-3.png";
import setup4 from "../assets/setup-4.png";
import setup5 from "../assets/setup-5.png";
import setup6 from "../assets/setup-6.png";
import setup7 from "../assets/setup-7.png";
import setup8 from "../assets/setup-8.png";
import setup9 from "../assets/setup-9.png";
import Image from "./Image";
export default function Setup() {
  return (
    <div className="w-container mx-auto my-20">
      <div className="text-center">
        <p className="text-sm">Share your setup with</p>
        <h2 className="text-4xl font-bold">#FuniroFurniture</h2>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="w-3.5/9">
          <div className="flex relative gap-5 mb-5">
            <Image src={setup1} alt="setup-1" />
            <Image src={setup3} alt="setup-3" className="absolute bottom-0" />
          </div>
          <div className="flex gap-5">
            <Image src={setup2} alt="setup-2" />
            <Image src={setup4} alt="setup-4" />
          </div>
        </div>
        <div className="w-2/9 flex items-center">
          <Image src={setup5} alt="setup-5" className="w-full" />
        </div>
        <div className="w-3.5/9">
          <div className="flex gap-5 relative w-full clear-both mb-5">
            <Image src={setup7} alt="setup-7" className="mt-20" />
            <Image src={setup9} alt="setup-9" className="float-end block" />
          </div>
          <div className="flex gap-5">
            <Image src={setup6} alt="setup-6" />
            <Image src={setup8} alt="setup-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
