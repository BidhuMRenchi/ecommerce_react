import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Favourites from "./pages/favourites";
import Cart from "./pages/cart";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Profile from "./pages/userProfile";
import Manage from "./pages/manageProfile";
import Loginval from "./components/auth/loginValidation";
import ChangePassword from "./pages/changePassword";
import Mprf from "./pages/mprf";
import PageNotFound from "./pages/pageNotFound";
import ProtectedRoute from "./components/auth/protectedRoute";

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
          <Route path="/home" element={<ProtectedRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
          <Route />
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/manage" element={<ProtectedRoute />}>
            <Route path="/manage" element={<Manage />} />
          </Route>
          <Route path="/" exact element={<Loginval />} />
          <Route path="change_password" exact element={<ChangePassword />} />
          <Route path="mprf" exact element={<Mprf />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
