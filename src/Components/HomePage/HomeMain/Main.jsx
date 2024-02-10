import React from "react";
import "../HomeMain/HomeMain.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div data-aos="fade-down" className="outer-div1">
        <div className="inner-div1">
          <div  className="heading">
            Empowering  E-commerce Success, Digitize Your Product Catalog with
            Digicat
          </div>
          <div className="content">
            Digicat will always be there for you.
          </div>
          <br />
          <br />{" "}
          <Link id="gtStart" className="gt-start-link" to="/SellerSite">
            Get started
          </Link>
        </div>
        <div className="inner-div2">
          <div className="main1">
            <p className="para">
              Transform your printed catalogs into dynamic digital assets with
              Digicat. Our experts ensure seamless conversion, facilitating easy
              management for your store.
            </p>
          </div>
          <div className="main2">
            <p>
              Enhance your product listings with {"DigiCat's"} meticulous data
              entry and optimization services. We input accurate information and
              optimize content for better visibility.
            </p>
          </div>
          <div className="main3">
            <p>
            Digitize your printed catalogs into dynamic digital resources with Digicat. Our skilled team ensures smooth conversion, simplifying management for your {"store's"} needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
