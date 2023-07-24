import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="App">
      <div>
        <form>
          <h1>SignUp Form</h1>
          <div>
            <label>Name</label>
            <input></input>
          </div>
          <div>
            <label>Email</label>
            <input></input>
          </div>
          <div>
            <label>Password</label>
            <input></input>
          </div>
          <div>
            <label>Age</label>
            <input></input>
          </div>
          <div>
            <label>Address</label>
            <input></input>
          </div>
          <div>
            <label>Mobile No.</label>
            <input></input>
          </div>
          <div>
            <label>State</label>
            <input></input>
          </div>
          <div>
            <button type="button">Signup</button>
          </div>
          <p>
            Had account <Link to={"/"}>Login</Link>here
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
