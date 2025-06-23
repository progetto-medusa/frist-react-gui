import {useState } from 'react';
import '../assets/styles/LoginComponent.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import LoaderComponent from './LoaderComponent';

export default function LoginComponent({ onLogin }) {
    const { darkMode } = useTheme();
    const [error, setError] = useState('');
    const [status, setStatus] = useState('wait');
    const [formData, setFormData] = useState({
        password: '',
        email: ''
    });

    const API_URL = `${process.env.REACT_APP_API_AUTH_URL}/auth`;

    const payload = {
      ...formData,
      application_id: `${process.env.REACT_APP_X_APP_KEY}`
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setStatus('loading');
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' ,'X-APP-KEY': `${process.env.REACT_APP_X_APP_KEY}`},
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                navigate('/success');
            } else {
                // const errorData = await response.json();
                navigate('/error');
            }
        } catch (err) {
            setStatus('wait');
            setError('Errore di rete o del server.');
        }
    };

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
        <Navbar isLoggedIn={false} />  
        {status === 'loading' && (<LoaderComponent/>)}
        <div className="login-container">
            {status !== 'loading' && (
                <>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input type="text"
                            placeholder="Email" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange}
                            required/>
                        <input type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required/>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Accedi</button>
                        <p >
                            <span onClick={() => navigate('/recovery')} style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
                                Recupera la password
                            </span>  
                        </p>
                        <p className="register-hint">
                            Altrimenti per registrarti
                            <br/>
                            <span onClick={() => navigate('/register')} style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
                                Clicca qui
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
