import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SteamSuccess from './pages/SteamSuccess';
// import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      {/* Global Layout */}
      {/* <div className="min-h-screen flex flex-col"> */}
        <Header />

        {/* Route content */}
        {/* <main className="flex-grow p-4"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/auth/steam/callback" element={<SteamSuccess />} />
          </Routes>
        {/* </main> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
