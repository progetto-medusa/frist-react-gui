import Footer from "./FooterComponent";
import Navbar from "./NavbarComponent";

export default function CampaignComponent({ isLoggedIn }) {
    const { darkMode } = useTheme();
    return (
         <div className={darkMode ? 'container dark' : 'container'}>
            <Navbar isLoggedIn={isLoggedIn} /> 
            <Footer />
    </div>
  );
}