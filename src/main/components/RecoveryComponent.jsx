import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../assets/styles/RecoveryComponent.css';
import { useState, useEffect } from 'react';
import LoaderComponent from './LoaderComponent';

export default function RecoveryComponent() {
  const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;
  const API_KEY = `${process.env.REACT_APP_X_APP_KEY}`;
  const { darkMode } = useTheme();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('wait');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    confirm_email: '',
    application_id: `${process.env.REACT_APP_APPLICATION_ID}`,
  });

  const token = searchParams.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const sendResetRequest = async () => {
        setStatus('loading');
        try {
          const response = await fetch(`${API_BASE_URL}/progetto-medusa/user/reset`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-APP-KEY': API_KEY,
            },
            body: JSON.stringify({
              application_id: formData.application_id,
              token: token,
            }),
          });

          if (response.ok) {
            navigate('/success');
          } else {
            navigate('/error');
            const errorData = await response.json();
            setError(errorData.message || 'Errore durante la procedura di reset.');
            setStatus('wait');
          }
        } catch (err) {
            navigate('/error');
            setError('Errore di rete o del server.');
            setStatus('wait');
        }
      };

      sendResetRequest();
    }
  }, [token, API_BASE_URL, API_KEY, formData.application_id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.email !== formData.confirm_email) {
      setError('Le email non corrispondono.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/progetto-medusa/user/recovery`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-APP-KEY': API_KEY,
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        navigate('/success');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Errore durante l\'invio del link');
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
      
        <div className="recovery-container">
            {!token ? (
                <>
                    {status !== 'loading' && (
                        <form className="recovery-form" onSubmit={handleSubmit}>
                        <h2>Inserisci la tua mail</h2>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="confirm_email"
                            placeholder="Conferma email"
                            value={formData.confirm_email}
                            onChange={handleChange}
                            required
                        />
                        <p>
                            Riceverai un link<br />cui reimpostare la password
                        </p>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Recupera</button>
                        </form>
                    )};
                </>
            ) : (
                <>

                </>
            )};
      </div>
      <Footer />
    </div>
  );
}
