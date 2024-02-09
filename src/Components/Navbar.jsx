import React from "react";
import { Link, useNavigate } from "react-router-dom";
import codeKalakaarLogo from "/images/DigiCatLogo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Ecommerce", href: "/Ecommerce" },
    { name: "Seller Site", href: "/SellerSite" },
    { name: "About Us", href: "/About" },
  ];
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img
              className="mx-3"
              id="logo-div"
              alt="Code_kalakaar_logo"
              src={codeKalakaarLogo}
            ></img>
            <h3 className="logo-text pointer">DigiCat</h3>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
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
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <img
                        className="mx-3"
                        id="logo-div"
                        alt="Code_kalakaar_logo"
                        src={codeKalakaarLogo}
                      ></img>
                      <h3 className="logo-text pointer">DigiCat</h3>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="searchItems">
                    <span className="search-container">
                      <img
                        hidden
                        id="search-desktop"
                        className="search-icon pointer"
                        src="https://img.icons8.com/?size=512&id=59878&format=png"
                        alt="Search"
                      />
                      {isAuthenticated ? (
                        <img
                          className="user-icon"
                          src={user.picture}
                          alt="user-logo"
                        />
                      ) : (
                        <img hidden src={""} alt="user-logo" />
                      )}
                      {/* <img id='search-mobile' className='search-icon pointer' src="https://cdn-icons-png.flaticon.com/512/4410/4410940.png" alt="Search" /> */}
                    </span>
                    <div className="button-items d-flex mt-4">
                      <span className="sign-div d-flex">
                        {isAuthenticated ? (
                          <button
                            type="button"
                            className="btn sign-btn btn-outline-secondary"
                            onClick={(e) => logout()}
                          >
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
                        )}
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
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
