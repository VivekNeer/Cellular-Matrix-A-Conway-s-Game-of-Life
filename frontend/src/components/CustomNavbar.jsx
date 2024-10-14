import { Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import Rubiks from "../assets/squares.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const CustomNavbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TfiAlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home </Link>
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
            {/* Add the theme select button inside the dropdown for small screens */}
            <li>
              <select data-choose-theme className="btn w-full">
                <option value="luxury">Luxury</option>
                <option value="cupcake">Cupcake</option>
                <option value="cyberpunk">Cyberpunk</option>
              </select>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          CellularMatrix
          <Player autoplay loop src={Rubiks} className="h-12 w-12" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>
                <Link to="/gallery">Gallery</Link>
              </summary>
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
        {/* Show the theme select button only on large screens */}
        <select data-choose-theme className="btn hidden lg:block">
          <option value="luxury">Luxury</option>
          <option value="cupcake">Cupcake</option>
          <option value="cyberpunk">Cyberpunk</option>
        </select>
      </div>
    </div>
  );
};

export default CustomNavbar;
