import { useState } from "react";
import logoURL from "../../../assets/img/logo-app.png";
import menuIMGURL from "../../../assets/img/mobile-menu-icon.png";
import "./Menus.scss";

import { Link, NavLink } from "react-router-dom";

const TopMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Clicked!");
    setOpen((o) => !o);
  };

  return (
    <nav className="container mx-auto mt-9 flex justify-around">
      <div className={`nav-logo-container ${open && "hidden"}`}>
        <img src={logoURL} alt="logo theater masks" />
      </div>
      <div
        className={`nav-links-container content-center mx-auto hidden md:block ${
          open && "open-mobile-menu"
        }`}
      >
        <ul className="sm:flex-reverse md:flex">
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button className={`md:hidden ${open && "mr-9"}`} onClick={toggleMenu}>
        <img src={menuIMGURL} alt="menu mobile" />
      </button>
    </nav>
  );
};

export default TopMenu;
