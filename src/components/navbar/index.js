import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const saved = localStorage.getItem("user");
//   const initial = JSON.parse(saved);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    return navigate("/");
  };
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/profile" activeStyle>
            {saved}
          </NavLink>
          <NavLink to="/favourites" activeStyle>
            <HeartOutlined />
          </NavLink>
          <NavLink to="/cart" activeStyle>
            <ShoppingCartOutlined />
          </NavLink>
          <NavLink to="/" activeStyle onClick={logout}>
            <LogoutOutlined />
          </NavLink>
          {/* <NavLink to='/about' activeStyle >
			About
		</NavLink>
        <NavLink to='/favourites' activeStyle>
        <HeartOutlined />
		</NavLink>
        <NavLink to='/cart' activeStyle>
        <ShoppingCartOutlined />
		</NavLink>
        <NavLink to='/sign-up' activeStyle>
        <LogoutOutlined />
		</NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
