import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink
          to={"/publicdashboard"}
          style={(obj) => {
            if (obj.isActive === true) {
              return {
                backgroundColor: "green",
                color: "white",
                textDecoration: "underline",
              };
            }
          }}
        >
          Public
        </NavLink>
        <NavLink
          to={"/ngodashboard"}
          style={(obj) => {
            if (obj.isActive === true) {
              return {
                backgroundColor: "green",
                color: "white",
                textDecoration: "underline",
              };
            }
          }}
        >
          Ngo
        </NavLink>
        <NavLink
          to={"/restaurantdashboard"}
          style={(obj) => {
            if (obj.isActive === true) {
              return {
                backgroundColor: "green",
                color: "white",
                textDecoration: "underline",
              };
            }
          }}
        >
          Restaurant
        </NavLink>
        <NavLink to={"/"}>Logout</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
