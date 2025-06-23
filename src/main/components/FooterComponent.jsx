import '../assets/styles/FooterComponent.css';

export default function FooterComponent({ isLoggedIn }) {
  return (
    <footer className={ isLoggedIn ? 'shadow-top footer': 'footer'}>
      <p>© {new Date().getFullYear()} Medusa's Lair. Tutti i diritti riservati...<br/><br/>0danb0</p>
    </footer>
  );
}
