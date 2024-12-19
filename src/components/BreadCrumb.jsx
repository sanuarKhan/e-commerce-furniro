/* eslint-disable react/prop-types */
import { Link } from "react-router";
import Image from "./Image";
import logoSm from "../assets/Logo-sm.png";

export default function BreadCrumb({ bcBg, text }) {
  return (
    <div
      className={`${bcBg} py-24 flex justify-center items-center flex-col gap-1 `}
    >
      <Image src={logoSm} alt="logo-sm" />
      <h2 className="text-3xl">{text}</h2>
      <div>
        <Link>Home &gt; </Link>
        <Link>{text}</Link>
      </div>
    </div>
  );
}
