import React, { useState } from "react";
import "./Main.css";
import { Star } from "../../index";
function ProdCard({ itemDetails }) {
  
  return (
    <div data-aos="fade-up" className="productCard mt-5">
      <div className="">
        <img draggable="flase" className="prodImg" src={itemDetails.image} />
      </div>
      <span className="ProdTitle">{`${itemDetails.title}`} </span>
      <div className="className">
        <div className="fw-bold">
          <span className="price-tag">{" ₹ " + itemDetails.price}</span>
        </div>
      </div>
      <button type="button" className="btn btn-store mt-2 btn-dark">
        Add to Cart
      </button>
      {/* <button type="button" className="btn mt-3 btn-store  btn-dark">Buy Now</button> */}
      <div className="text-center mt-1 p-2">
        <div className="text-center mt-4">
          <Star
            stars={itemDetails.rating.rate}
            reviews={itemDetails.rating.count}
          />
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
