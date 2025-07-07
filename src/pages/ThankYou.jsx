import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  // Generate a mock order number
  const orderNumber = `URB${Date.now().toString().slice(-6)}`;

  return (
    <div className="thank-you">
      <div className="container">
        <div className="thank-you-content">
          <div className="success-icon">
            <div className="checkmark">✓</div>
          </div>
          
          <h1>Merci pour ta commande !</h1>
          <p className="order-confirmation">
            Ta commande <strong>#{orderNumber}</strong> a été confirmée
          </p>

          <div className="order-details">
            <h3>Que se passe-t-il maintenant ?</h3>
            <div className="timeline">
              <div className="timeline-item completed">
                <div className="timeline-icon">✓</div>
                <div className="timeline-content">
                  <h4>Commande confirmée</h4>
                  <p>Nous avons reçu ta commande et commençons à la préparer</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">📦</div>
                <div className="timeline-content">
                  <h4>Préparation</h4>
                  <p>Nous préparons soigneusement tes articles (24-48h)</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">🚚</div>
                <div className="timeline-content">
                  <h4>Expédition</h4>
                  <p>Livraison prévue dans 2-3 jours ouvrés</p>
                </div>
              </div>
            </div>
          </div>

          <div className="next-steps">
            <h3>Prochaines étapes</h3>
            <div className="steps-grid">
              <div className="step-card">
                <h4>📧 Email de confirmation</h4>
                <p>Tu vas recevoir un email avec les détails de ta commande</p>
              </div>
              <div className="step-card">
                <h4>📱 Suivi de livraison</h4>
                <p>Nous t'enverrons un lien de suivi dès l'expédition</p>
              </div>
            </div>
          </div>

          <div className="survey-invitation">
            <h3>Ton avis nous intéresse</h3>
            <p>Aide-nous à améliorer ton expérience en répondant à quelques questions</p>
            <Link to="/survey" className="survey-btn">
              Donner ton avis
            </Link>
          </div>

          <div className="actions">
            <Link to="/shop" className="continue-shopping-btn">
              Continuer les achats
            </Link>
            <a href="mailto:support@CityDrip.com" className="contact-btn">
              Besoin d'aide ?
            </a>
          </div>

          <div className="social-share">
            <p>Partage ton style avec #CityDrip</p>
            <div className="social-buttons">
              <button className="social-btn instagram">📷 Instagram</button>
              <button className="social-btn facebook">📘 Facebook</button>
              <button className="social-btn twitter">🐦 Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;