import ProductCart from "./ProductCart";

export default function RelatedProduct() {
  return (
    <div className="flex flex-col gap-10  justify-center items-center w-container mx-auto mt-10">
      <h2 className="text-4xl ">Related Produtcs</h2>
      <div className="flex flex-wrap mx-auto justify-between gap-5">
        <ProductCart limit={4} />
      </div>
      <button className="text-yellow-600 py-2 my-5 px-12 border-2 border-yellow-600">
        Show More
      </button>
    </div>
  );
}
