import { useState } from "react";
import logoURL from "../../../assets/img/logo-app.png";
import menuIMGURL from "../../../assets/img/mobile-menu-icon.png";
import toggleOn from "../../../assets/img/switch-light.png";
import toggleOff from "../../../assets/img/switch-dark.png";
import "./Menus.scss";

import { Link, NavLink } from "react-router-dom";

interface Props {
  theme: string;
  switchThemeFunction: () => void;
}

const TopMenu = ({ theme, switchThemeFunction }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Clicked!");
    setOpen((o) => !o);
  };

  const handleClickSwitcher = () => {
    switchThemeFunction();
  };

  return (
    <nav className="container mx-auto pt-9 flex justify-around">
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
      <div className="nav-buttons flex flex-col-reverse md:flex-col">
        <button
          className={`nav-theme-switcher nav-theme-switcher--${theme}`}
          onClick={handleClickSwitcher}
        >
          <img
            src={theme == "light" ? toggleOn : toggleOff}
            alt="Switch menu"
          />
        </button>
        <button
          className={`nav-menu-mobile md:hidden ${
            open && "mr-9"
          } nav-menu-mobile--${theme == "light" ? "light" : "dark"}`}
          onClick={toggleMenu}
        >
          <img src={menuIMGURL} alt="Menu mobile" />
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
