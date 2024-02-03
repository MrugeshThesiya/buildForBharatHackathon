import React from "react";
import { useNavigate } from "react-router-dom";
import codeKalakaarLogo from "./images/codeKalakaar_Logo.png";
// import { log } from "util";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="d-flex">
      <img id="logo-div" alt="Code_kalakaar_logo" src={codeKalakaarLogo}></img>
      <div className="logoText">
        <h3 className="logo-text pointer">Code Kalakaar</h3>
      </div>
      <div className="linkItems">
        <ul className="link-items">
        <li className="pointer">
            <a href="/">Home</a>
          </li>
          <li className="pointer">
            <a href="/products">Products</a>
          </li>
          <li className="pointer">
            <a href="/ecommerce">Ecommerce</a>
          </li>
          <li className="pointer">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="pointer">
            <a href="/blog">Blog</a>
          </li>
          <li className="pointer">
            <a href="/contact">Contact</a>
          </li>
          <li className="pointer">
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
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
            onClick={()=>{navigate("/signup")}}
            type="button"
            className="btn mx-4 fw-bold start-btn bg-primary text-light btn-outline-primary"
          >
            Get Started
          </button>
        </span>
      </div>
    </nav>
  );
}
