import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../assets/styles/ActivateUserComponent.css'; 
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import LoaderComponent from './LoaderComponent';
import { useNavigate } from 'react-router-dom';

export default function ActivateUserComponent() {
    const { darkMode } = useTheme();    
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [status, setStatus] = useState('loading');
    const navigate = useNavigate();

    const API_URL = `${process.env.REACT_APP_API_BASE_URL}/progetto-medusa/user/activate`;
    const API_KEY = `${process.env.REACT_APP_X_APP_KEY}`;

    const payload = {
        application_id: `${process.env.REACT_APP_APPLICATION_ID}`,
        confirmation_token: token
    }
    
    useEffect(() => {
        if (!token) {
            setStatus('loading');
            return;
        }

        const activate = async () => {
            try {
                const res = await fetch(API_URL, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', 'X-APP-KEY': API_KEY},
                    body: JSON.stringify(payload),
                });
                if (res.status === 200) {
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (err) {
                setStatus('error');
            }
        };

        activate();
    }, [token, API_URL, API_KEY]);

    return (
        <div className={darkMode ? 'container dark' : 'container'}>
            
            <div className="navbar-wrapper">
                <Navbar isLoggedIn={false} />  
            </div>
            {status === 'loading' && (
                <LoaderComponent/>
            )}
            <div className="activate-container">
                {status !== 'loading' && (
                    <>
                        <div className="activate-form">
                            {status === 'success' && <p>Attivazione completata con successo!</p>}
                            {status === 'error' && <p>Errore durante l'attivazione.<br/> Contatta il supporto.</p>}
                            <button onClick={() => navigate('/')}>Home</button>
                        </div>
                    </>
                )}
                    
            </div>
            <Footer />
        </div>
    );
};
