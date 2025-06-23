import '../assets/styles/home/HomePage.css';
import Footer from '../components/FooterComponent';
import Navbar from '../components/NavbarComponent';
import { useTheme } from '../contexts/ThemeContext';

export default function HomePage({ isLoggedIn}) {
  const { darkMode } = useTheme(); 
  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Navbar isLoggedIn={isLoggedIn} />  
      <div className="home-page-container">
          <p>Home Page<br/><br/>WORK IN PROGRESS</p>
      </div>
      <Footer isLoggedIn={true}/>
    </div>
    );
}
