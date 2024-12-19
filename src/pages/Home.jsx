import Browser from "../components/Browser";

import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import Products from "../components/Products";
import Setup from "../components/Setup";

export default function Home() {
  return (
    <div>
      <Header />
      <Browser />
      <Products />
      <Inspiration />
      <Setup />
    </div>
  );
}
