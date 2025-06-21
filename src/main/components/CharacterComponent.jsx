import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";

export default function CampaignComponent({ isLoggedIn }) {
    const { darkMode } = useTheme();
    return (
         <div className={darkMode ? 'container dark' : 'container'}>
            <Navbar isLoggedIn={isLoggedIn} /> 
            <Footer />
    </div>
  );
}