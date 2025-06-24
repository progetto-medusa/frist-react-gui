import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";
import { useTheme } from "../contexts/ThemeContext";
import "../assets/styles/home/CharacterComponent.css";

export default function CharacterComponent({ isLoggedIn }) {
    const { darkMode } = useTheme();
    return (
      <div className={darkMode ? 'container dark' : 'container'}>
        <Navbar isLoggedIn={isLoggedIn} /> 
        <div className="character-container">
            <p>Personaggi<br/><br/>WORK IN PROGRESS</p>
        </div>
        <Footer isLoggedIn={true}/>
      </div>
  );
}