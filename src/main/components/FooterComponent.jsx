import React from 'react';
import '../assets/styles/FooterComponent.css';

export default function FooterComponent() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Medusa's Lair. Tutti i diritti riservati...<br/><br/>0danb0</p>
    </footer>
  );
}
