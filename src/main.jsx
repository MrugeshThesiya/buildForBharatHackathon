import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Aboutus,SellerSite,Ecommerce} from "./Pages/PageIndex";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SellerSite" element={<SellerSite />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
        </Routes>
      ,
  </BrowserRouter>
);
