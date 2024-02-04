import React from "react";
import Wave from "./Wave";

export default function Container() {
  return (
    <div>
      <hr />
      <div data-aos="fade-down" className="text-center mt-5">
        <p className="tagline-text">
          Develop Swiftly. <br /> <span className="mt-3">Deploy Globally.</span>
        </p>
        <div data-aos="" className="text-dark tagline">
          Your Online Business <a href="/contact">Journey With Ease</a>
        </div>
      </div>
      <div className="dicover text-center">
      <button className="disc-btn">
        <svg
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          className="sparkle"
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>

        <span className="text">Discover DigiCat Cloud</span>
      </button>
      </div> <br /><br /><br /> <br />
      <div data-aos="" className="text-center">
        <div className="what-text">What is Code Kalakaar?</div>
        <div className="caption text-center">
          Fast-track app creation, effortless sharing.
        </div>
        <div className="caption-ans text-center">
          Code Kalakaar revolutionizes app development, sharing, and deployment.
          Say goodbye to environment headaches and embrace seamless creation and
          collaboration.
        </div>
      </div>
    </div>
  );
}
