import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./../../utils/demoFix/style.css";
import { getLocalStore } from "../../utils/local";
import * as logOutAnimation from "../../assets/animation/AnimationLogOut.json";
import Lottie from "react-lottie";

const HeaderDemo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const loggedInUser = getLocalStore("user_login");
    if (loggedInUser && loggedInUser.taiKhoan) {
      setUsername(loggedInUser.taiKhoan);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("user_login");
      setUsername(null);
      setIsLoggingOut(false);
    }, 2000);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logOutAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const checkLink2 = ({ isActive }) => {
    return isActive ? "text-violet-500" : "";
  };

  return (
    <header
      className={`bg-white border-b-2 border-black-500 sticky-header ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="logo ml-10 font-bold">Long Ngo</span>
          </a>
        </div>
        <div className="relative lg:hidden ghostMenu mr-20">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="ghostContent fixed top-20 bg-blue-950 text-white text-center left-0 right-0  p-4 rounded-md shadow-md z-50 opacity-75">
              <NavLink
                className={checkLink2}
                to={"/"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={checkLink2}
                to={"/project"}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </NavLink>
              <NavLink
                className={checkLink2}
                to={"/skill"}
                onClick={() => setIsMenuOpen(false)}
              >
                Skill
              </NavLink>
              <NavLink
                className={checkLink2}
                to={"/contact"}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink className={checkLink2} to={"/"}>
            Home
          </NavLink>
          <NavLink className={checkLink2} to={"/project"}>
            Project
          </NavLink>
          <NavLink className={checkLink2} to={"/skill"}>
            Skill
          </NavLink>
          <NavLink className={checkLink2} to={"/contact"}>
            Contact
          </NavLink>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end relative">
          {username ? (
            <div className="text-center userTK">
              <div>
                <span className="nameTK text-sm font-semibold leading-6 text-blue-500 block">
                  Hi, <span>{username}</span>
                </span>
              </div>
              <div>
                <button
                  className="py-1 px-2 bg-gray-600 text-white text-sm rounded-lg shadow hover:shadow-xl"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/signup"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign Up
            </Link>
          )}
        </div>
      </nav>
      {isLoggingOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </header>
  );
};

export default HeaderDemo;
