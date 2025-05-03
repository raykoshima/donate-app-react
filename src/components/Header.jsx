import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { SteamLoginButton } from './SteamLoginButton';

const Header = () => {
  const { user, logout, loading } = useAuth();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">MyApp</div>
      <center><nav>
        {loading ? (
          <span>Loading...</span> // หรือจะใส่ spinner สุดเฟี้ยวก็ได้
        ) : user ? (
          <>
            <span>Welcome, {user.name}</span>
            <img src={user.avatar} />
            <button
              onClick={logout}
              className="ml-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Log Out
            </button>
          </>
        ) : (
          <SteamLoginButton />
        )}
      </nav></center>
    </header>
  );
};

export default Header;
