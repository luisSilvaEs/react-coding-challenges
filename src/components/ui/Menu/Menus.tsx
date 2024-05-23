import logoURL from "../../../assets/img/logo-app.png";
import "./Menus.scss";

const TopMenu = () => {
  return (
    <nav className="container mx-auto flex mt-2">
      <div className="nav-logo-container">
        <img src={logoURL} alt="" />
      </div>
      <div className="nav-links-container content-center mx-auto hidden md:block">
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
