import React, { use, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink, useNavigate,  } from 'react-router';
import Logo from '../assets/logo.avif';
import AuthContext from '../Contexts/AuthContext/AuthContext';

const Navbar = () => {

const { user, signOutUser } = use( AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

const handleLogout = async () => {
    await signOutUser();
    navigate("/");
  };



   const links = <>
   <li> <NavLink to="/">Home</NavLink></li>
    <li> <NavLink to="/plants">Explore Artworks</NavLink></li>
     <li> <NavLink to="/profile">My Profile</NavLink></li>
  
    </>



    return (
       <div className="navbar shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl py-8 rounded-lg transition-transform duration-300 hover:scale-105 ">
        <img className='w-12 h-12 rounded-4xl ' src={Logo} alt="" /><p>Artify</p></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
    {links}
    </ul>
  </div>
  {/* -------- */}
 <div className="navbar-end ">
  {user ? (
    <div className="relative">
   
       <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center btn p-0 rounded-full w-[72px] h-[72px] overflow-hidden"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <CgProfile className="w-full h-full text-green-700" />
        )}
      </button>

    
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10 animate-fade-in">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-800">{user.displayName || user.email}</p>
          </div>
          <NavLink
            to="/profile"
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 font-medium"
          >
            Profile
          </NavLink>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
        ) : (
          <div className="space-x-3">
            <NavLink to="/login" className="btn  bg-[#15803D] text-white rounded-xl hover:bg-green-600">Login</NavLink>
            <NavLink to="/signup" className="btn  bg-[#15803D] rounded-xl text-white hover:bg-green-600">Register</NavLink>
          </div>
        )}
      </div>

</div>
    );
};

export default Navbar;