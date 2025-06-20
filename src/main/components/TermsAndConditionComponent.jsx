import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import '../assets/styles/TermsAndConditionComponent.css';

export default function TermsAndConditionComponent() {
    const { darkMode } = useTheme();
    const navigate = useNavigate();

    return (
        <div className={darkMode ? 'container dark' : 'container'}>
            <div className="navbar-wrapper">
                <Navbar isLoggedIn={false} />
            </div>
            <div className="terms-container">
                <div className="terms-form">
                    <h2>Termini e Condizioni d'Uso</h2>
                    <p>
                        Utilizzando questa applicazione, l'utente accetta i seguenti termini e condizioni:
                    </p>
                    <ol>
                        <li>
                        I dati forniti dall'utente vengono salvati su un database di proprietà di <strong>Accesso Italiano</strong>,
                        installato su un cluster ospitato da un SBC (Single Board Computer) con persistenza su disco fisico.
                        </li>
                        <li>
                        <strong>Accesso Italiano</strong> si impegna a non utilizzare i dati degli utenti per scopi di marketing
                        e non vende i dati a terze parti né a broker di dati.
                        </li>
                        <li>
                        L'accettazione di questi termini non comporta l'iscrizione automatica ad alcuna newsletter o comunicazione promozionale.
                        </li>
                        <li>
                        I dati raccolti verranno utilizzati esclusivamente per finalità di studio e per analisi prestazionali interne
                        volte a migliorare i servizi offerti.
                        </li>
                        <li>
                        I dati di accesso (come password e credenziali) vengono criptati in maniera irreversibile per garantire la sicurezza
                        delle informazioni sensibili.
                        </li>
                        <li>
                        <strong>Accesso Italiano</strong> non trae profitto dai dati degli utenti, ma dal lavoro e dai servizi forniti
                        attraverso la piattaforma.
                        </li>
                        <li>
                        Questa applicazione è sviluppata esclusivamente per finalità di studio, sperimentazione e apprendimento tecnologico.
                        </li>
                    </ol>
                    <p>
                        Per ulteriori informazioni o domande riguardo alla gestione dei dati, ti invitiamo a contattarci direttamente.
                    </p>
                    <button onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}