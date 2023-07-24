import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NgoDashBoard from "./components/NgoDashBoard";
import RestaurantDashBoard from "./components/RestaurantDashBoard";
import PublicDashBoard from "./components/PublicDashBoard";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/ngodashboard" element={<NgoDashBoard />}></Route>
        <Route
          path="/restaurantdashboard"
          element={<RestaurantDashBoard />}
        ></Route>
        <Route path="/publicdashboard" element={<PublicDashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
