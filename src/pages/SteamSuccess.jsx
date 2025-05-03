import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../lib/axios';

export default function SteamSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = window.location.search;
        const res = await api.get(`/auth/steam/return${query}`);
        const { token, user } = res.data;

        localStorage.setItem('token', token);
        login(token, user);
        navigate('/');
      } catch (err) {
        console.error('Steam login error:', err);
        navigate('/login');
      }
    };

    fetchUser(); // 🧙 summon the function
  }, [login, navigate]);

  return <div>Logging you in via Steam...</div>;
}
