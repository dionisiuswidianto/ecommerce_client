import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


//API CUSTOMER e3179110d12bb57ff55a0a198ebb1ace12a60f04fd93a85673b02a76a51cfb3ab862f11cc1f2a408a3978793c5c6ec6b0fb3355e9c3b56831c36b78e7cd2888ffc72e5625d18a5b1c14f49fc9b3e4a5ede668c128752211c21eeb0b9f31be6d89a3ac952edb152004463947317bed77a52802200dac99c63fae3978a53cd50d4