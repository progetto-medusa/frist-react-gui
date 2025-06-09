import FeatureCard from '../components/FeatureCard';
import '../assets/styles/FeaturesSection.css';

export default function FeaturesSection() {
  const features = [
    { title: 'Schede Personaggio', description: 'Crea e salva più schede per ogni utente.' },
    { title: 'Gestione Campagne', description: 'Crea partite condivise e cronologie.' },
    { title: 'Console GM', description: 'Gestisci bonus/malus, oggetti e media.' },
    { title: 'Sistema Eventi', description: 'Eventi di gioco centralizzati per il DM.' },
    { title: 'Leaderboard & Community', description: 'Confronta e condividi personaggi e DM.' }
  ];

  return (
    <section id="features" className="features-section">
      <h2>Funzionalità principali</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <FeatureCard key={idx} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
}
