import { TbAdjustmentsHorizontal } from "react-icons/tb";

import { RxDividerVertical } from "react-icons/rx";
import { BsDistributeVertical } from "react-icons/bs";

import { BsGridFill } from "react-icons/bs";

export default function ProductFilter() {
  return (
    <div className="bg-red-50">
      <div className="flex justify-between items-center w-container mx-auto py-3">
        <div className="flex gap-8 items-center">
          <TbAdjustmentsHorizontal className="text-2xl text-black" />
          <span>Filter</span>
          <BsGridFill className="text-2xl text-black" />
          <BsDistributeVertical className="text-2xl text-black" />
          <RxDividerVertical className="text-2xl text-black h-10 w-auto" />
        </div>
        <div className="flex gap-8 items-center">
          <span>Show</span>
          <span className="bg-white p-4">16</span>
          <span>Short by</span>
          <button className="py-2 ps-1 pe-14 bg-white">Default</button>
        </div>
      </div>
    </div>
  );
}
