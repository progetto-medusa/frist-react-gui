import { useTheme } from '../contexts/ThemeContext';
import '../assets/styles/LandingPage.css';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import HeroSection from '../sections/HeroSection';
import CTASection from '../sections/CTASection';
import FeaturesSection from '../sections/FeaturesSection';

export default function LandingPage({ isLoggedIn }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <div className="navbar-wrapper">
        <Navbar isLoggedIn={isLoggedIn} />  
      </div>
      <HeroSection/>
      <FeaturesSection/>
      <CTASection/>
      <Footer />
    </div>
  );
}
