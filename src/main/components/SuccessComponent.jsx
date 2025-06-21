import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import '../assets/styles/SuccessComponent.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function SuccessComponent(){
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    return (
        <div className={darkMode ? 'container dark' : 'container'}>
            <Navbar isLoggedIn={false} />  
            <div className="success-container">
                <div className="success-form">
                    <p>Operazione andata a buonfine</p> 
                    <button onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}