import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Header">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
