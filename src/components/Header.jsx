import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="app-logo" src={LOGO_URL} alt="app logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
