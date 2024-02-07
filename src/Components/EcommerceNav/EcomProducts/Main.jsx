import axios from "axios";
import React, { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

function Main() {
  const [products, setProducts] = useState([]);
  const ProductsAPI = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios
      .get(ProductsAPI)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  }, []);
  return (
    <>
    <div data-aos="fade-up" className="text-center">
      <h3 className="mt-4">Recommended For You</h3>
    </div>
      <div className="productCards">
        {products.map((itemDetails) => {
          return (
            <>
             <ProdCard itemDetails={itemDetails}/>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Main;
