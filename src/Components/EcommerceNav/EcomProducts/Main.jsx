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
  const [more,SetMore] = useState(8);
  const showMore = () =>{
    SetMore(more + 16)
    if(more >= 24){
      document.getElementById('showMore').style.display="none";
    }
  }
  return (
    <>
    <div data-aos="fade-up" className="text-center">
      <h3 className="mt-4">Recommended For You</h3>
    </div>
      <div className="productCards">
        {products.slice(0,more).map((itemDetails) => {
          return (
            <>
             <ProdCard itemDetails={itemDetails}/>
            </>
          );
        })}
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="text-center">
        <button id="showMore" onClick={showMore} className="btn"> Show More</button>
      </div>
    </>
  );
}

export default Main;
