/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import codeKalakaarLogo from "/images/DigiCatLogo.jpg";
import { useAuth0 } from "@auth0/auth0-react";


export default function Nav() {
  
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Ecommerce", slug: "/Ecommerce" },
    { name: "Seller Site", slug: "/SellerSite" },
    { name: "About Us", slug: "/About" },
  ];
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
          className="mx-3"
            id="logo-div"
            alt="Code_kalakaar_logo"
            src={codeKalakaarLogo}
          ></img>
          <h3 className="logo-text pointer">
            DigiCat
          </h3>
          <div className="linkItems">
          <ul className="link-items">
            {navItems.map((item) => (
              <li key={item.name} className="pointer">
                <a href={item.slug}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
          </div>
        <div className="searchItems">
          <span className="search-container">
          <img hidden
              id="search-desktop"
              className="search-icon pointer"
              src="https://img.icons8.com/?size=512&id=59878&format=png"
              alt="Search"
            />
            {
              isAuthenticated ? (
                <img className="user-icon" src={user.picture} alt="user-logo" />
              ) : (
                <img hidden src={""} alt="user-logo" />
              )
            }
            {/* <img id='search-mobile' className='search-icon pointer' src="https://cdn-icons-png.flaticon.com/512/4410/4410940.png" alt="Search" /> */}
          </span>
          <div className="button-items d-flex">
            <span className="sign-div d-flex">
              {
                isAuthenticated ? (
                  <button
                  type="button"
                  className="btn sign-btn btn-outline-secondary"
                  onClick={(e)=> logout()}>
                    Logout
                  </button>
                ) : (
                  <button
                  onClick={(e) => loginWithRedirect()}
                  type="button"
                  className="btn sign-btn btn-outline-secondary"
                >
                  Sign In
                </button>
                )
              }
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
      <hr />
    </>
  );
}
