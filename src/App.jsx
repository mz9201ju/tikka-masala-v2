import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import MenuPage from "./components/Menu/MenuPage";
import Catering from "./components/Catering/Catering";

import "./index.css";

import MENU from "./components/Menu/MENU";

const categories = [...new Set(MENU.map((i) => i.category))];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + change } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const getItemQty = (id) =>
    cart.find((i) => i.id === id)?.qty || 0;

  const handleCheckout = () => alert("Checkout coming soon");

  return (
    <BrowserRouter basename="/tikka-masala-v2/">
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
              handleCheckout={handleCheckout}
            />
          }
        />

        <Route path="/catering" element={<Catering />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
