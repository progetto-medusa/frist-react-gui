import './App.css';
import LandingPage from './main/pages/LandingPage';
import LoginComponent from './main/components/LoginComponent';
import RegisterComponent from './main/components/RegisterComponent';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />}/>
            <Route path="/login" element={<LoginComponent onLogin={handleLogin} />}/>
            <Route path="/register" element={<RegisterComponent onLogin={handleLogin} />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
