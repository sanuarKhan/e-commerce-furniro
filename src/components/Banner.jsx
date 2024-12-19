export default function Banner() {
  return (
    <div className=" w-100 flex">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className="w-[643px] h-[443px] bg-yellow-100 my-28 ms-10 py-16 px-14">
          <span className="text-black">New Arrival</span>
          <h2 className="text-4xl text-yellow-600 w-1/2 font-bold py-5">
            Discover Our New Collection
          </h2>
          <p className="text-black">
            Explore the latest trends with our brand-new collection! Designed to
            inspire, each piece combines style and comfort to elevate your
            wardrobe.
          </p>
          <button className="px-8 py-3 bg-yellow-600 text-white rounded my-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
