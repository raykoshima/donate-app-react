// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const refreshUser = async () => {
    try {
      const res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user, logging out...", err);
      logout();
    }
  };

  // fetch user on first mount *if* token exists
  useEffect(() => {
    if (token && !user) {
      refreshUser();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
