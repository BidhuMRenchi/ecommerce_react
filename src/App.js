import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Favourites from "./pages/favourites";
import Cart from "./pages/cart";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Profile from "./pages/user_profile";
import Manage from "./pages/manage_prf";
import Loginval from "./components/auth/Loginval";
import ChangePassword from "./pages/change_pass"



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="val" exact element={<Login />} />
        <Route path="logout" exact element={<Logout />} />
        <Route path="about" element={<About />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="manage" element={<Manage />} />
        <Route path="/" exact element={<Loginval />} />
        <Route path="change_password" exact element={<ChangePassword />} />
        
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
