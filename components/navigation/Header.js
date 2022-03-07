import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
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
            <Link href='/#home'>Home</Link>
          </li>
          <li className='nav-item flex flex-center'>
            <Link href='/#about'>
              <a>
                About <FaChevronDown style={{ marginLeft: "0.5rem" }} />
              </a>
            </Link>
            <ul className='drop-down-menu'>
              <li className='drop-item flex flex-center'>
                <Link href='/#about'>About Me</Link>
              </li>
              <li className='drop-item flex flex-center'>
                <Link
                  href='/images/MichaelHall_Resume.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav-item flex flex-center'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='nav-item flex flex-center'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className='nav-item flex flex-center'>
            <Link href='/#contact'>Contact</Link>
          </li>
          <Hamburger openHandler={openHandler} sideOpen={sideOpen} />
        </ul>
        <SideNav sideOpen={sideOpen} openHandler={openHandler} />
      </nav>
    </>
  );
};

export default Header;
