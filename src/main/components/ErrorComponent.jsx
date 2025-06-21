import '../assets/styles/ErrorComponent.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';

export default function ErrorComponent(){
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    return (
        <div className={darkMode ? 'container dark' : 'container'}>
            <Navbar isLoggedIn={false} />  
            <div className="error-container">
                <div className="error-form">
                    <p>Qualcosa è andato storto</p> 
                    <button onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}