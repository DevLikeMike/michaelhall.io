import React from "react";

const Hamburger = ({ openHandler, sideOpen }) => {
  return (
    <div
      id='hamburger-container'
      className={sideOpen ? "hamburger-container open" : "hamburger-container"}
      onClick={openHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
