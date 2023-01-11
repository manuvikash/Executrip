import LogoutIcon from "../assets/logout.png";
import Profile from "../assets/profile.png";
import Star from "../assets/star.png";
import { animate, timeline } from "motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      timeline(
        [
          [".block1", { y: 7.5 }],
          [".block1", { rotate: "45deg" }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 0,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { y: -7.5 }],
          [".block3", { rotate: "-45deg" }],
        ],
        { duration: 0.5 }
      );
      timeline(
        [
          [
            ".nav-menu",
            {
              transform: "translateX(0vw)",
              transformOrigin: "right",
              // borderRadius: "0%",
            },
            { duration: 0.5 },
          ],
        ],
        {}
      );
    } else {
      timeline(
        [
          [".block1", { rotate: "0deg" }],
          [".block1", { y: 0 }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 1,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { rotate: "0deg" }],
          [".block3", { y: 0 }],
        ],
        {}
      );
      timeline(
        [
          [
            ".nav-menu",
            {
              transform: "translateX(100vw)",
              transformOrigin: "right",
            },
            { duration: 0.5 },
          ],
        ],
        {}
      );
    }
  }, [isOpen]);

  return (
    <nav className=" fixed z-30 h-auto py-0 w-screen">
      <div className=" bg-grey-800 shadow-xl w-full flex items-center justify-center  text-white py-2 pb-4 ease-in-out">
        <div className="md:mx-10 lg:mx-10 flex items-center">
          <Link to="/city-select">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
              alt="logo"
              className="h-10 w-10"
            />
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-center items-center">
          <div className="hidden md:flex items-center space-x-3 text-lg mx-10">
            <Link to="/city-select">
              <NavItem name="Home" />
            </Link>
            <Link to="/">
              <NavItem name="Discover" />
            </Link>
            <Link to="/whyus">
              <NavItem name="Why us?" />
            </Link>
            <button>
              <img src={Star} className="h-8 w-8"></img>
            </button>
            <button>
              <img src={Profile} className="h-8 w-8"></img>
            </button>
          </div>
          <button
            className="z-50 space-y-1 mx-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="block1 w-7 h-1 bg-white"></div>
            <div className="block2 w-7 h-1 bg-white"></div>
            <div className="block3 w-7 h-1 bg-white"></div>
          </button>
          <div className="nav-menu h-screen w-full flex flex-col py-32 items-center space-y-6 fixed top-0 right-0 md:hidden font-semibold text-2xl bg-gradient-to-bl from-purple-800 to-purple-700">
            <NavbarMobileItem name={"Home"} className="item-1" />
            <NavbarMobileItem name={"Discover"} className="item-2" />
            <NavbarMobileItem name={"Why us?"} className="item-3" />
            <NavbarMobileItem name={"Starred Guides"} className="item-4" />
            <div className="flex flex-col justify-center items-center w-full px-10 space-y-8">
              <button>
                <img src={Profile} className="h-12 w-12"></img>
              </button>
              <button>
                <img src={LogoutIcon} className="h-12 w-12"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavItem = ({ name }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="md:visible invisible flex flex-col items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p
        className={`${
          isHover ? "text-white" : "text-gray-200"
        } mx-4 my-2 duration-300 font-body text-base md:text-sm`}
      >
        {name}
      </p>
      <div
        className={`${
          !isHover ? "w-1/2" : "w-1/5"
        } transition-all bg-white h-0.5 rounded-full`}
      ></div>
    </button>
  );
};

const NavbarMobileItem = ({ name, className }) => {
  return <div className={`${className}`}>{name}</div>;
};
