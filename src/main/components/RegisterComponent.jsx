import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import '../assets/styles/RegisterComponent.css';
import { useTheme } from '../contexts/ThemeContext';

export default function RegisterComponent() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const API_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const payload = {
      ...formData,
      role: 'user'
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'X-APP-KEY':'example-react-app'},
        body: JSON.stringify(payload)
      });
// console.log('Response:',)
      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Errore durante la registrazione.');
      }
    } catch (err) {
      setError('Errore di rete o del server.');
    }
  };

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Navbar isLoggedIn={false} />

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Registrati</h2>
          {/* <label htmlFor="name">Nome</label> */}
          <input
            type="text"
            name="username"
            placeholder="Nome"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min 8 caratteri)"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Registrati</button>
          <p className="register-hint">
            Hai già un account?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Vai al login
            </span>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
}
