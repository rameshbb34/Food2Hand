import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function RestaurantLogin() {
  let emailInputRef = useRef();
  let passInputRef = useRef();
  let navigate = useNavigate();

  let loginValid = () => {
    if (
      emailInputRef.current.value === "ramesh@restaurant.com" &&
      passInputRef.current.value === "ramesh@123"
    ) {
      navigate("/restaurantdashboard");
    } else {
      alert("Username or Password Incorrect");
    }
  };
  return (
    <div className="App">
      <div className="form-container">
        <form>
          <h1>Restaurant Login Form</h1>
          <div>
            <div>
              <label>Email</label>
              <input ref={emailInputRef}></input>
            </div>
            <div>
              <label>Password</label>
              <input ref={passInputRef}></input>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  loginValid();
                }}
              >
                Login
              </button>
            </div>
            <p>
              Dont Have a account <Link to={"/signup"}>Sign up</Link> here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RestaurantLogin;
