import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <>
      {/* Deals Banner with Promo Button */}
      <div className="deals-banner">
        <div className="deals-content">
          <span className="deals-text">
            🔥 PROMO LIMITÉE : -20% sur tous les hoodies avec le code URBAN20
          </span>
          <Link to="/shop?type=Hoodie" className="top-promo-button">
            Jetez un coup d'œil aux promos →
          </Link>
          <span className="deals-text">
            ✨ Livraison gratuite dès 50$ d'achat
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <h1>CityDrip</h1>
          </Link>
          
          <nav className="nav">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/shop" className="nav-link">Magasiner</Link>
            <Link to="/cart" className="nav-link cart-link">
              Panier
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
            <Link to="/survey" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;