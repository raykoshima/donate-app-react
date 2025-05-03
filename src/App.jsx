import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SteamSuccess from './pages/SteamSuccess';
import { useAuth } from './contexts/AuthContext';
// import Login from './pages/Login';

const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div className="p-10 text-center text-xl">Loading...</div>;
  }
  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/steam/callback" element={<SteamSuccess />} />
          </Routes>
    </Router>
  );
};

export default App;
