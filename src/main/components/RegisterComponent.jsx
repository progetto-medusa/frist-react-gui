import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import '../assets/styles/RegisterComponent.css';
import { useTheme } from '../contexts/ThemeContext';
import LoaderComponent from './LoaderComponent';

export default function RegisterComponent() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [status, setStatus] = useState('wait');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    accepted_terms: false
  });
  const [error, setError] = useState('');
  const API_URL = `${process.env.REACT_APP_API_BASE_URL}/progetto-medusa/user`;
  const API_KEY = `${process.env.REACT_APP_X_APP_KEY}`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirm_password) {
      setError('Le password non corrispondono.');
      return;
    }

    if (!formData.accepted_terms) {
      setError('Devi accettare i termini e le condizioni.');
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: 'user',
      application_id: `${process.env.REACT_APP_APPLICATION_ID}`,
      accepted_terms: formData.accepted_terms
    };

    setStatus('loading');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-APP-KEY': API_KEY },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        navigate('/success');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Errore durante la registrazione.');
        setStatus('wait');
      }
    } catch (err) {
      setStatus('wait');
      setError('Errore di rete o del server.');
    }
  };

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Navbar isLoggedIn={false} />
      {status === 'loading' && <LoaderComponent />}
      <div className="login-container">
        {status !== 'loading' && (
          <>
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Registrati</h2>
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
            <input
              type="password"
              name="confirm_password"
              placeholder="Conferma Password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="accepted_terms"
                checked={formData.accepted_terms}
                onChange={handleChange}
              />
              Accetto i <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">termini e condizioni</a>
            </label>

            {error && <p className="error">{error}</p>}
            <button type="submit">Registrati</button>
            <p className="register-hint">
              Hai già un account?{' '}
              <span
                onClick={() => navigate('/login')}
                style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
              >
                <br />
                Vai al login
              </span>
            </p>
          </form>
          </>
        )}
        
      </div>
      <Footer />
    </div>
  );
}
