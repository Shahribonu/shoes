import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
