import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Comparison from "../pages/Comparison";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/shop/:productId" element={<SingleProduct />} />
          <Route
            path="/shop/comparizon/:comparisonId"
            element={<Comparison />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
