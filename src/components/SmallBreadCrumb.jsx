import { RxDividerVertical } from "react-icons/rx";

import { Link, useParams } from "react-router";

export default function SmallBreadCrumb() {
  const { productId } = useParams();

  return (
    <div className="py-6 bg-red-50">
      <div className="w-container mx-auto flex justify-start items-center gap-2">
        <Link to="/" className="text-gray-600">
          Home
        </Link>
        <span className="text-black"> &gt;</span>
        <Link to="/shop" className="text-gray-600">
          Shop
        </Link>
        <span className="text-black"> &gt;</span>

        <RxDividerVertical className="text-4xl text-gray-600" />

        <span className="text-black font-bold">{productId}</span>
      </div>
    </div>
  );
}
