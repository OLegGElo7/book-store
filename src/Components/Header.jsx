import React from "react";
import "../style/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="App__wrapper">
        <div className="header__wrapper">
          <div className="header__logo">Book Store</div>
          <div className="header__pages">
            <Link
              style={{ marginRight: 15 }}
              className="header__btn"
              to="/About"
            >
              About Store
            </Link>
            <Link className="header__btn" to="/Home">
              Go to bookstore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
