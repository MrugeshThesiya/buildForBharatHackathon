/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import codeKalakaarLogo from "/images/favicon-32x32.png";

export default function Nav() {
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Ecommerce", slug: "/Ecommerce" },
    { name: "SellerSite", slug: "/SellerSite" },
    { name: "About", slug: "/About" },
  ];
  return (
    <nav>
      <div className="logo">
        <img
          id="logo-div"
          alt="Code_kalakaar_logo"
          src={codeKalakaarLogo}
        ></img>
        <h3 className="logo-text pointer">DigiCat</h3>
      </div>
      <div className="linkItems">
        <ul className="link-items">
          {navItems.map((item) => (
            <li key={item.name} className="pointer">
              <a href={item.slug}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="searchItems">
        <span className="search-container">
          <img
            id="search-desktop"
            className="search-icon pointer"
            src="https://img.icons8.com/?size=512&id=59878&format=png"
            alt="Search"
          />
          {/* <img id='search-mobile' className='search-icon pointer' src="https://cdn-icons-png.flaticon.com/512/4410/4410940.png" alt="Search" /> */}
        </span>
        <div className="button-items d-flex">
          <span className="sign-div d-flex">
            <button
              type="button"
              className="btn sign-btn btn-outline-secondary"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              type="button"
              className="btn mx-4 fw-bold start-btn bg-primary text-light btn-outline-primary"
            >
              Get Started
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}
