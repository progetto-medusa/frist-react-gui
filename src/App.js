import './App.css';
import LandingPage from './main/pages/LandingPage';
import LoginComponent from './main/components/LoginComponent';
import RegisterComponent from './main/components/RegisterComponent';
import ActivateUserComponent from './main/components/ActivateUserComponent';
import ErrorComponent from './main/components/ErrorComponent';
import SuccessComponent from './main/components/SuccessComponent';
import CampaignComponent from './main/components/CampaignComponent';
import RecoveryComponent from './main/components/RecoveryComponent';
import { AuthProvider } from "./main/contexts/AuthProvider";
import ProtectedRoute from "./main/contexts/ProtectedRoute";
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
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />}/>
              <Route path="/login" element={<LoginComponent onLogin={handleLogin} />}/>
              <Route path="/register" element={<RegisterComponent onLogin={handleLogin} />}/>
              <Route path="/recovery" element={<RecoveryComponent onLogin={handleLogin} />}/>
              <Route path="/activate-user" element={<ActivateUserComponent />} />
              <Route path="/error" element={<ErrorComponent />} />
              <Route path="/success" element={<SuccessComponent />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionComponent />} />
              <Route path="/games" element={<HomePage isLoggedIn={true} />} />
              <Route path="/characters" 
                element={
                <ProtectedRoute>
                  <HomePage isLoggedIn={true} />
                </ProtectedRoute>
                } 
              />
              <Route path="/campaigns" 
                element={
                  <ProtectedRoute>
                    <CampaignComponent isLoggedIn={true} />
                  </ProtectedRoute>
                } 
              />
              <Route path="/home-page" 
                element={
                  <ProtectedRoute> 
                    <HomePage isLoggedIn={true} />
                  </ProtectedRoute> 
                } 
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
