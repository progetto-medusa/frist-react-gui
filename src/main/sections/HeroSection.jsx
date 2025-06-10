import '../assets/styles/HeroSection.css';
import logo from '../assets/images/logo.png';

export default function HeroSection() {
  return (
    <section className="hero">
      <img src={logo} alt="Medusa Logo" className="hero-image" />
      <div className="hero-text">
        <h1>Gestisci le tue avventure di D&D<br/><br/><span className="highlight-text">Come mai<br/>Prima d'ora</span></h1>
        {/* <span style={{ height:"20px"}}></span>  */}

        <button>Provalo ora</button>
      </div>
    </section>
  );
}
