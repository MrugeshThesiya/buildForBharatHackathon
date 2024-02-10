import React from 'react'
import "./Main.css"
import logo from "/images/DigiCatLogo.jpg"
import { Link } from 'react-router-dom'
export default function Main() {
  return (
    <>
<div className="pg-footer">
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="fill-gray-200" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-copyright">
          <p className="footer-copyright-text">
            <Link className="footer-copyright-link" to="/" target="_self"> ©2024 | Designed By Team Code Kalaakars | All rights reserved. </Link>
          </p>
      </div>
    </footer>
  </div>
    </>
  )
}
