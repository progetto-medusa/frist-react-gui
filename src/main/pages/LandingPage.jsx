import { useTheme } from '../contexts/ThemeContext';
import '../assets/styles/landing/LandingPage.css';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import HeroSection from './sections/HeroSection';
import CTASection from './sections/CTASection';
import FeaturesSection from './sections/FeaturesSection';

export default function LandingPage({ isLoggedIn }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <div className="navbar-wrapper">
        <Navbar isLoggedIn={isLoggedIn} />  
      </div>
      <div class="custom-shape-divider-bottom-1749540671">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
        </svg>
      </div>
      <HeroSection/>
      <div class="custom-shape-divider-top-1749540503">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
          </svg>
      </div>
      <FeaturesSection/>
      <CTASection/>
      <Footer />
    </div>
  );
}
