import productImg3 from "../assets/product-view-3.png";
import productImg4 from "../assets/product-view-4.png";
import Image from "./Image";

export default function ProductDescription() {
  return (
    <div className="w-container mx-auto border-spacing-1 border-gray-200 border-b-2 pb-10">
      <div className="flex gap-20 justify-center my-14">
        <button>Description</button>
        <button>Additional Information</button>
        <button>Reviews [5]</button>
      </div>
      <div className="flex flex-col gap-10 ps-36 my-5">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex gap-10 justify-start mt-10">
        <Image src={productImg3} alt="product-view" className="w-full" />
        <Image src={productImg4} alt="product-view" className="w-full" />
      </div>
    </div>
  );
}
