import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { SteamLoginButton } from './SteamLoginButton';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div> */}
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">TFOC</a>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
    {user ? (
      <>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.avatar} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {user.name}
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        {/* <li><a>Settings</a></li> */}
        <li><a onClick={logout}>Logout</a></li>
      </ul>
      </>
    ) : (
      <SteamLoginButton />
    )}
    </div>
  </div>
</div>
    // <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
    //   <div className="text-xl font-bold">MyApp</div>
    //   <center><nav>
    //     {user ? (
    //       <>
    //         <span>Welcome, {user.name}</span>
    //         <img src={user.avatar} />
    //         <button
    //           onClick={logout}
    //           className="ml-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
    //         >
    //           Log Out
    //         </button>
    //       </>
    //     ) : (
    //       <SteamLoginButton />
    //     )}
    //   </nav></center>
    // </header>
  );
};

export default Header;
