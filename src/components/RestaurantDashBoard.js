import React from "react";
import NavBar from "../NavBar";

function RestaurantDashBoard() {
  return (
    <div className="App">
      <NavBar />
      <div className="rest-container">
        <h1>RestaurantDashBoard</h1>
        <h2>Welcome to Food2Hand</h2>
        <h2>You are a Restaurant User</h2>
      </div>
    </div>
  );
}

export default RestaurantDashBoard;
