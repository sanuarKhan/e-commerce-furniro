import image1 from "../assets/dining.png";
import image2 from "../assets/living.png";
import image3 from "../assets/bedroom.png";
import Image from "./Image";
const imageDetalils = [
  { imageLink: image1, text: "Dining" },
  { imageLink: image2, text: "Living" },
  { imageLink: image3, text: "Bedroom" },
];

export default function Browser() {
  return (
    <div className="flex text-center flex-col w-container mx-auto my-20">
      <div className="my-10">
        <h2 className="text-3xl text-black font-bold pb-5">Browse The Range</h2>
        <p>Discover stylish, versatile pieces to elevate your look</p>
      </div>
      <div className="flex justify-between">
        {imageDetalils.map((item, index) => (
          <div className="w-100 rounded" key={index}>
            <Image src={item.imageLink} alt={item.text} />{" "}
            <p className="p-10 text-2xl text-black">{item.text}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
