import '../assets/styles/CTASection.css';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <h2>Pronto a iniziare la tua prossima avventura?</h2>
      <p>Registrati ora e unisciti alla community</p>
      <button onClick={() => navigate('/register')}>Iscriviti Gratis</button>
    </section>
  );
}
