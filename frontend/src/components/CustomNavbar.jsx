import React from "react";
import { Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdInvertColors } from "react-icons/md";

const CustomNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg> */}
            <TfiAlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/gallery">Gallery</Link>
              <ul className="p-2">
                <li>
                <Link to="/gallery">Endless</Link>
                </li>
                <li>
                <Link to="/gallery">Endless</Link>
                </li>
              </ul>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CellularMatrix</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary><Link to="/gallery">Gallery</Link></summary>
              <ul className="p-2">
                <li>
                  <Link to="/gallery">Endless</Link>
                </li>
                <li>
                <Link to="/gallery">Space Craft</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-3">Login/Signup</a>
        <a className="btn"><MdInvertColors /></a>
      </div>
    </div>
  );
};

export default CustomNavbar;
