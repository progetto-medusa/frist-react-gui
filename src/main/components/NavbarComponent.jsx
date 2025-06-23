import { useNavigate } from 'react-router-dom';
import '../assets/styles/NavbarComponent.css';
// import { useTheme } from '../contexts/ThemeContext';

export default function NavbarComponent({ isLoggedIn }) {
  const navigate = useNavigate();
  // const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      {isLoggedIn ? (
        <div className="navbar-wrapper-logged">
          <header className="header-logged">
            <div className="logo-section" onClick={() => navigate('/')}>
              <h1 className="logo-logged">ML</h1>
            </div>
            <nav className="nav-links">
              <span onClick={() => navigate('/campaigns')}>Campagne</span>
              <span onClick={() => navigate('/characters')}>Personaggi</span>
              <span onClick={() => navigate('/games')}>Partite</span>
            </nav>
          </header>
        </div>
      ) : (
        <div className="navbar-wrapper">
          <header className="header">
            <div className="header-content">
              <h1 className="logo" onClick={() => navigate('/')}>
                Medusa's Lair
              </h1>
            </div>
            {/* <button className={`neomorph-button ${darkMode ? 'dark' : 'light'}`} onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '🌙' : '☀️'}
            </button> */}
          </header>
        </div>
      )}
    </>
  );
}
