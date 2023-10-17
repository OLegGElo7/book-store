import React from "react";
import Button from "./UI/Button/Button";
import "../style/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="App__wrapper">
        <div className="header__wrapper">
          <div className="header__logo">Book Store</div>
          <div className="header__pages">
            <Button style={{ marginRight: 15 }}>
              <Link className="header__btn" to="/About">
                About Store
              </Link>
            </Button>
            <Button>
              <Link className="header__btn" to="/Home">
                Go to bookstore
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
