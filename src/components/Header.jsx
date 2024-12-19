import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

export default function Header() {
  return (
    <div className="bg-banner bg-no-repeat bg-center bg-cover">
      <Banner />
    </div>
  );
}
