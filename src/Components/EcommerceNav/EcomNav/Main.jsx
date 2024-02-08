import React from 'react'
import "./Main.css"
function Main() {
  return (
  <>
  <nav className='Ecom-Nav'>
    <h6 className='ecom-logo'>DigiCat Store</h6>
    <ul className='ecom-link-items'>
      <li>
      <div className="search-box-ecommerce">
      <input className='Ecom-search-input' placeholder='Search DigitCat Ecommerce Store...' type="text" id="ecom-search" />
      <img    
              id="search-ecom"
              className="search-icon pointer"
              src="https://img.icons8.com/?size=512&id=59878&format=png"
              alt="Search"
            />

      </div>
      <button className="sign-ecom">Become a Seller</button>
      <button className="sign-ecom">Seller Login</button>
      </li>
      <li></li>
    </ul>
  </nav>
  </>
  )
}

export default Main