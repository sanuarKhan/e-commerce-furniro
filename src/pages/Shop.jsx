import BreadCrumb from "../components/BreadCrumb";
import Features from "../components/Features";
import Pagination from "../components/Pagination";
import ProductCart from "../components/ProductCart";
import ProductFilter from "../components/ProductFilter";

export default function Shop() {
  return (
    <div>
      <BreadCrumb text="Shop" bcBg="bg-bcBg bg-cover bg-no-repeat bg-center" />
      <ProductFilter />
      <div className="flex flex-wrap mx-auto justify-between w-container py-5">
        <ProductCart />
        <ProductCart />
      </div>
      <Pagination />
      <Features />
    </div>
  );
}
