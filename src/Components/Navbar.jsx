import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Logo from "../assets/logo.avif";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import { use } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = async () => {
    await signOutUser();
    navigate("/");
  };

  const links = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-pink-300 font-medium transition-colors"
      >
        Home
      </NavLink>
      <NavLink
        to="/artworks"
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-pink-300 font-medium transition-colors"
      >
        Explore Artworks
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add-artwork"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-pink-300 font-medium transition-colors"
          >
            Add Artwork
          </NavLink>
          <NavLink
            to="/my-gallery"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-pink-300 font-medium transition-colors"
          >
            My Gallery
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-pink-300 font-medium transition-colors"
          >
            My Favorites
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 text-white">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Artify Logo"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-extrabold tracking-wide">Artify</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">{links}</div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {!user ? (
            <div className="hidden md:flex space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-pink-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-white text-pink-600 hover:bg-pink-100 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              />
              <div className="absolute hidden group-hover:flex flex-col right-0 mt-2 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-3 w-44">
                <p className="text-sm mb-2 font-medium text-center">
                  {user.displayName}
                </p>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 text-sm font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 px-6 py-4 flex flex-col space-y-4 text-white">
          {links}
          {!user ? (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-left">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
