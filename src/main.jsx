import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Product from "./Product";
import Blogs from "./Blogs";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Ecommerce from "./Ecommerce";
import Signup from "./Signup";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      ,
  </BrowserRouter>
);
