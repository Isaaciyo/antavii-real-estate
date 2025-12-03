import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [isUser, setIsUser] = useState(false);

  const toggleUser = () => {
    setIsUser((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>AntaviiEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        {isUser ? (
          <div className="user">
            <img
              src="https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            <Link to="/" className="sign-out" onClick={toggleUser}>
              <span>Sign Out</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/profile" onClick={toggleUser}>
              Sign in
            </Link>
            <Link to="/" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
