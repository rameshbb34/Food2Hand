import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PublicLogin from "./PublicLogin";
import NgoLogin from "./NgoLogin";
import RestaurantLogin from "./RestaurantLogin";

function Login() {
  let ngoRef = useRef();
  let publicRef = useRef();
  let restaRef = useRef();
  let selectRef = useRef();
  let ngoEmailInputRef = useRef();
  let ngoPassInputRef = useRef();
  let pubEmailInputRef = useRef();
  let pubPassInputRef = useRef();
  let resEmailInputRef = useRef();
  let resPassInputRef = useRef();
  let navigate = useNavigate();

  let ngoLoginValid = () => {
    if (
      ngoEmailInputRef.current.value === "ramesh@ngo.com" &&
      ngoPassInputRef.current.value === "ramesh@34"
    ) {
      navigate("/ngodashboard");
    } else {
      alert("Username or Password Incorrect");
    }
  };
  let publicLoginValid = () => {
    if (
      pubEmailInputRef.current.value === "ramesh@public.com" &&
      pubPassInputRef.current.value === "Ramesh123"
    ) {
      navigate("/publicdashboard");
    } else {
      alert("Username or Password Incorrect");
    }
  };

  let restaurantLoginValid = () => {
    if (
      resEmailInputRef.current.value === "ramesh@restaurant.com" &&
      resPassInputRef.current.value === "ramesh@123"
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
          <h1>Users</h1>
          <div>
            <label>select Login user</label>
            <select
              ref={selectRef}
              onChange={() => {
                if (selectRef.current.value == "ngo") {
                  ngoRef.current.style.display = "block";
                  publicRef.current.style.display = "none";
                  restaRef.current.style.display = "none";
                } else if (selectRef.current.value == "restaurant") {
                  ngoRef.current.style.display = "none";
                  publicRef.current.style.display = "none";
                  restaRef.current.style.display = "block";
                } else if (selectRef.current.value == "public") {
                  ngoRef.current.style.display = "none";
                  publicRef.current.style.display = "block";
                  restaRef.current.style.display = "none";
                }
              }}
            >
              <option>----Select----</option>
              <option value="ngo">NGO</option>
              <option value="restaurant">Restaurants</option>
              <option value="public">Public</option>
            </select>
            <div className="form-container hide" ref={ngoRef}>
              <h1> Ngo Login Form</h1>
              <div>
                <div>
                  <label>Email</label>
                  <input ref={ngoEmailInputRef}></input>
                </div>
                <div>
                  <label>Password</label>
                  <input ref={ngoPassInputRef}></input>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      ngoLoginValid();
                    }}
                  >
                    Login
                  </button>
                </div>
                <p>
                  Dont Have a account <Link to={"/signup"}>Sign up</Link> here
                </p>
              </div>
            </div>

            <div className="form-container hide" ref={publicRef}>
              <h1>Public Login Form</h1>
              <div>
                <div>
                  <label>Email</label>
                  <input ref={pubEmailInputRef}></input>
                </div>
                <div>
                  <label>Password</label>
                  <input ref={pubPassInputRef}></input>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      publicLoginValid();
                    }}
                  >
                    Login
                  </button>
                </div>
                <p>
                  Dont Have a account <Link to={"/signup"}>Sign up</Link> here
                </p>
              </div>
            </div>

            <div className="form-container hide" ref={restaRef}>
              <h1>Restaurant Login Form</h1>
              <div>
                <div>
                  <label>Email</label>
                  <input ref={resEmailInputRef}></input>
                </div>
                <div>
                  <label>Password</label>
                  <input ref={resPassInputRef}></input>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      restaurantLoginValid();
                    }}
                  >
                    Login
                  </button>
                </div>
                <p>
                  Dont Have a account <Link to={"/signup"}>Sign up</Link> here
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <PublicLogin className="hide" ref={publicRef} />
      <NgoLogin className="hide" ref={ngoRef} />
      <RestaurantLogin className="hide" ref={restaRef} /> */}
    </div>
  );
}

export default Login;
