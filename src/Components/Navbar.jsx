import React from "react";

import Logo from "../assets/logo.avif";
import { NavLink } from "react-router";

const Navbar = () => {
  
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-indigo-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/artworks" className="hover:text-indigo-500">
          Explore Artworks
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-artwork" className="hover:text-indigo-500">
          Add Artwork
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-gallery" className="hover:text-indigo-500">
          My Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" className="hover:text-indigo-500">
          Favorites
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-3 py-2">
      {/* ✅ Navbar Start */}
      <div className="navbar-start">
        {/* 🔹 Mobile dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden btn-sm"
          >
            {/* Hamburger Icon */}
            <svg
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* ✅ Dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
          >
            {navLinks}
          </ul>
        </div>

        {/* ✅ Logo and Name */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-9 h-9 rounded-full" />
          <NavLink
            to="/"
            className="text-xl font-bold text-indigo-600"
          >
            Artify
          </NavLink>
        </div>
      </div>

      {/* ✅ Navbar Center for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
          {navLinks}
        </ul>
      </div>

      {/* ✅ Navbar End — Always visible buttons */}
      <div className="navbar-end flex gap-2">
        <NavLink
          to="/login"
          className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
