import Footer from "./FooterComponent";
import Navbar from "./NavbarComponent";
import { useTheme } from "../contexts/ThemeContext";
import "../assets/styles/home/GamesComponent.css";

export default function GamesComponent({ isLoggedIn }) {
    const { darkMode } = useTheme();
    return (
      <div className={darkMode ? 'container dark' : 'container'}>
        <Navbar isLoggedIn={isLoggedIn} /> 
        <div className="games-container">
          <p>Partite<br/><br/>WORK IN PROGRESS</p>
        </div>
        <Footer isLoggedIn={true}/>
      </div>
  );
}