import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import MenuPage from "./components/Menu/MenuPage";
import Catering from "./components/Catering/Catering";
import ScrollToTop from "./components/ScrollToTop";
import useCart from "./hooks/useCart";

import "./index.css";

import MENU from "./components/Menu/MENU";

const categories = [...new Set(MENU.map((i) => i.category))];

export default function App() {
  const { cart, addToCart, updateQty, clearCart, total, getItemQty } =
    useCart();

  return (
    <BrowserRouter basename="/tikka-masala-v2/">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <MenuPage
              MENU={MENU}
              categories={categories}
              cart={cart}
              addToCart={addToCart}
              updateQty={updateQty}
              clearCart={clearCart}
              total={total}
              getItemQty={getItemQty}
            />
          }
        />

        <Route path="/catering" element={<Catering />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
