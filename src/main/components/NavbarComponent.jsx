import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/NavbarComponent.css';

export default function NavbarComponent({ isLoggedIn}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { darkMode, setDarkMode } = useTheme();

    const handleNavigate = (path) => {
      navigate(path);
    };

    const isOnLoginPage = location.pathname === '/login';

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Example App</h1>
        {/* <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button> */}
      </div>
    </header>
  );
}