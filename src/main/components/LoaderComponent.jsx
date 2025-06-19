import { useTheme } from '../contexts/ThemeContext';

export default function LoaderComponent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
        <div className="loader" />
        <div className="overlay" /> 
    </div>
  );
}