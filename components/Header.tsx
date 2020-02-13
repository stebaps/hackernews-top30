import React from "react";

const Header = () => {
  return (
    <div
      className="ui borderless main menu fixed"
      style={{ position: "fixed", top: "0px", left: "auto", zIndex: 10 }}
    >
      <div className="ui text container">
        <div className="header item" style={{ color: "#4183c4" }}>
          Hacker News - Top 30 Stories
        </div>
      </div>
    </div>
  );
};

export default Header;
