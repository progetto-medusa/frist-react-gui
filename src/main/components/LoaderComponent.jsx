import { useTheme } from '../contexts/ThemeContext';
import '../assets/styles/LoaderComponent.css'

export default function LoaderComponent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
        <div className="loader" />
        <div className="overlay" /> 
    </div>
  );
}