import React from "react";
import { useState } from "react";
export default function Signup() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = async (e) => {
    e.preventDefault();
    try {
    const newUser = await  account.create(userDetails.email, userDetails.password, userDetails.name);
    console.log(newUser);
    } catch (error) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div id="signUpBox" className="text-center">
        <div class="form-box">
          <form class="form">
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
              <input
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    name: e.target.value,
                  });
                }}
                type="text"
                class="input"
                placeholder="Full Name"
              />
              <input
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  });
                }}
                type="email"
                class="input"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  });
                }}
                type="password"
                class="input"
                placeholder="Password"
              />
            </div>
            <button
              onClick={(e) => {
                signupUser(e);
              }}
            >
              Sign up
            </button>
          </form>
          <div class="form-section">
            <p>
              Have an account? <a href="">Log in</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
