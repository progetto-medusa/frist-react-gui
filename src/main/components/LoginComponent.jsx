import React, { useState } from 'react';
import '../assets/styles/LoginComponent.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';

export default function LoginComponent({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { darkMode } = useTheme();

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(true);         
            navigate('/');    
        }
    };

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
        <div className="navbar-wrapper">
            <Navbar isLoggedIn={false} />  
        </div>
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="text"
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required/>
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                <p className="register-hint">
                    Altrimenti per registrarti
                    <br/>
                    <span onClick={() => navigate('/register')} style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
                        Clicca qui
                    </span>  
                </p>
                <button type="submit">Accedi</button>
            </form>
        </div>
        <Footer />
    </div>
  );
}
