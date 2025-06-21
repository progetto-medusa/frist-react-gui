import './App.css';
import LandingPage from './main/pages/LandingPage';
import LoginComponent from './main/components/LoginComponent';
import RegisterComponent from './main/components/RegisterComponent';
import ActivateUserComponent from './main/components/ActivateUserComponent';
import ErrorComponent from './main/components/ErrorComponent';
import SuccessComponent from './main/components/SuccessComponent';
import TermsAndConditionComponent from './main/components/TermsAndConditionComponent';
import HomePage from './main/pages/HomePage';
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
            <Route path="/activate-user" element={<ActivateUserComponent />} />
            <Route path="/error" element={<ErrorComponent />} />
            <Route path="/success" element={<SuccessComponent />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionComponent />} />
            <Route path="/games" element={<HomePage isLoggedIn={true} />} />
            <Route path="/characters" element={<HomePage isLoggedIn={true} />} />
            <Route path="/campaigns" element={<HomePage isLoggedIn={true} />} />
            <Route path="/home-page" element={<HomePage isLoggedIn={true} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
