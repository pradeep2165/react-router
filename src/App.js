import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import Feature from "./components/Feature";
import New from "./components/New";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/product" element={<Product />}>
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
