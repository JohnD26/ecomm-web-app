import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CityDrip</h3>
            <p>Mode urbaine écoresponsable pour tous les styles</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/shop">Magasiner</Link></li>
              <li><Link to="/survey">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#shipping">Livraison</a></li>
              <li><a href="#returns">Retours</a></li>
              <li><a href="#size-guide">Guide des tailles</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#facebook" aria-label="Facebook">📘</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; Tous droits réservés.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;