import React from "react";
import nbaLogo from "../assets/nba-logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <img src={nbaLogo} alt="" />
      <h1>LEGENDS</h1>
    </div>
  );
};

export default Header;
