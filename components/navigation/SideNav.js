import React from "react";

const SideNav = ({ sideOpen, openHandler }) => {
  const onClick = () => {
    openHandler();
  };

  return (
    <div className={sideOpen ? "sideNav open" : "sideNav"}>
      <ul className='sideNav-links'>
        <li className='sideNav-item' onClick={onClick}>
          <a href='#home'>Home</a>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <a href='#about'>About</a>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <a href='#projects'>Projects</a>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
