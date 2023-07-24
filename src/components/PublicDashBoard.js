import React from "react";
import NavBar from "../NavBar";

function PublicDashBoard() {
  return (
    <div className="App">
        <NavBar/>
      <div className="public-container">
        <h1>PublicDashBoard</h1>
        <h2>Welcome to Food2Hand</h2>
        <h2>You are a Public User</h2>
      </div>
    </div>
  );
}

export default PublicDashBoard;
