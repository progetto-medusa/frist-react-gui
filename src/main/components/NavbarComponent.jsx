import { useNavigate } from 'react-router-dom';
import { useAuth  } from '../contexts/AuthProvider';
import '../assets/styles/NavbarComponent.css';
// import { useTheme } from '../contexts/ThemeContext';

export default function NavbarComponent({ isLoggedIn }) {
  const { logout } = useAuth(); 
  const navigate = useNavigate();
  // const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      {isLoggedIn ? (
        <div className="navbar-wrapper-logged shadow-bottom">
          <header className="header-logged">
            <div className="logo-section" onClick={() => navigate('/home-page')} style={{ cursor: 'pointer' }}>
              <h1 className="logo-logged">ML</h1>
            </div>
            <nav className="nav-links">
              <span onClick={() => navigate('/campaigns')}>Campagne</span>
              <span onClick={() => navigate('/characters')}>Personaggi</span>
              <span onClick={() => navigate('/games')}>Partite</span>
            </nav>
            <div className="logout-button" 
              onClick={() => {
                const confirmed = window.confirm('Sei sicuro di voler effettuare il logout?');
                if (confirmed) {
                  logout();
                  navigate('/success')
                  console.log('Logout confermato');
                } else {
                  console.log('Logout annullato');
                }
              }} style={{ cursor: 'pointer' }}>
              Logout
            </div>
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
