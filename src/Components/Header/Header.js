import React from "react";
import headerData from "./headerData";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">Qwerty</div>
      <div className="right-side">
        {headerData.map((item, index) => (
          <button key={index}>{item.name}</button>
        ))}
      </div>
    </div>
  );
};
export default Header;
