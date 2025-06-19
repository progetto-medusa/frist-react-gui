import '../assets/styles/HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    { number: 1, title: 'Crea il tuo account', description: 'Registrati gratuitamente e accedi alla piattaforma.' },
    { number: 2, title: 'Crea personaggi e partite', description: 'Genera schede, gestisci campagne e invita i tuoi amici.' },
    { number: 3, title: 'Gioca e condividi', description: 'Gestisci eventi, migliora i personaggi e partecipa alla community.' }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>Come funziona</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
