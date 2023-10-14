import React from "react";
import Button from "./UI/Button/Button";
import "../style/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="App__wrapper">
        <div className="header__wrapper">
          <div className="header__logo">Book Store</div>
          <div className="header__pages">
            <Button style={{ marginRight: 15 }}>page 1</Button>
            <Button>page 2</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
