import ProductDescription from "../components/ProductDescription";
import ProductView from "../components/ProductView";
import RelatedProduct from "../components/RelatedProduct";
import SmallBreadCrumb from "../components/SmallBreadCrumb";

export default function SingleProduct() {
  return (
    <div>
      <SmallBreadCrumb />
      <ProductView />
      <ProductDescription />
      <RelatedProduct />
    </div>
  );
}
