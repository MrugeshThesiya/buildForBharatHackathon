import axios from "axios";
import React, { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

function Main() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleRows, setVisibleRows] = useState(1);
  const [totalRows, setTotalRows] = useState(1);
  const ProductsAPI = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(ProductsAPI)
      .then((res) => {
        setProducts(res.data);
        setTotalRows(Math.ceil(res.data.length / getItemsPerRow()));
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [ProductsAPI]);

  useEffect(() => {
    updateVisibleRows();
    window.addEventListener("resize", updateVisibleRows);

    return () => {
      window.removeEventListener("resize", updateVisibleRows);
    };

  }, [products,visibleRows]);

  const getItemsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 992) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 2;
    }
  };

  const updateVisibleRows = () => {
    const itemsPerRow = getItemsPerRow();
    const endIndex = visibleRows * itemsPerRow;
    setDisplayedProducts(products.slice(0, endIndex));
    setTotalRows(Math.ceil(products.length / itemsPerRow));
  };

  const showMore = () => {
    const newVisibleRows = visibleRows + 1;
    if (newVisibleRows <= totalRows) {
      setVisibleRows(newVisibleRows);
    }
  };

  const showLess = () => {
    const newVisibleRows = visibleRows - 1;
    if (newVisibleRows >= 1) {
      setVisibleRows(newVisibleRows);
    }
  };

  return (
    <>
      <div data-aos="fade-up" className="text-center">
        <h3 className="mt-4">Recommended For You</h3>
      </div>
      <div className="productCards">
        {displayedProducts.map((itemDetails, index) => (
          <ProdCard key={index} itemDetails={itemDetails} />
        ))}
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="text-center">
        {visibleRows < totalRows && (
          <button onClick={showMore} className="btn">
            Show More
          </button>
        )}
        {visibleRows > 1 && (
          <button onClick={showLess} className="btn">
            Show Less
          </button>
        )}
      </div>
    </>
  );
}

export default Main;
