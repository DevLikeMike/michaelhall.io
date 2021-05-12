import React, { useState } from "react";
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";

const Header = () => {
  const [sideOpen, setSideOpen] = useState(false);

  const openHandler = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <>
      <nav>
        <ul className='main-navigation'>
          <li className='nav-item flex flex-center'>
            <a href='#home'>Home</a>
          </li>
          <li className='nav-item flex flex-center'>
            About <i className='fas fa-chevron-down'></i>
            <ul className='drop-down-menu'>
              <li className='drop-item flex flex-center'>
                <a href='#about'>About Me</a>
              </li>
              <li className='drop-item flex flex-center'>
                <a
                  href='/images/MichaelHall_Resume.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </li>
            </ul>
          </li>
          <li className='nav-item flex flex-center'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='nav-item flex flex-center'>
            <a href='#contact'>Contact</a>
          </li>
          <Hamburger openHandler={openHandler} sideOpen={sideOpen} />
        </ul>
        <SideNav sideOpen={sideOpen} openHandler={openHandler} />
      </nav>
    </>
  );
};

export default Header;
