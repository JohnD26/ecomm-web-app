import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';

const CartPage = ({ cart, removeFromCart, updateQuantity, totalPrice }) => {
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const finalTotal = totalPrice + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Votre panier</h1>
          <p>{itemCount} article{itemCount !== 1 ? 's' : ''} dans votre panier</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <h2>Votre panier est vide</h2>
              <p>Presque fini ! Découvrez notre collection et trouvez votre style parfait.</p>
              <Link to="/shop" className="shop-now-btn">
                Découvrir nos produits
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <Cart 
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Récapitulatif</h3>
                
                <div className="summary-line">
                  <span>Sous-total ({itemCount} article{itemCount !== 1 ? 's' : ''})</span>
                  <span>{totalPrice.toFixed(2)}$</span>
                </div>
                
                <div className="summary-line">
                  <span>Livraison</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="free-shipping">Gratuite 🎉</span>
                    ) : (
                      `${shipping}$`
                    )}
                  </span>
                </div>

                {shipping > 0 && (
                  <div className="shipping-notice">
                    <p>💡 Livraison gratuite dès 50$ d'achat</p>
                    <p>Plus que {(50 - totalPrice).toFixed(2)}$ !</p>
                  </div>
                )}
                
                <div className="summary-line total">
                  <span>Total</span>
                  <span>{finalTotal.toFixed(2)}$</span>
                </div>
                
                <Link to="/checkout" className="checkout-btn">
                  Payer maintenant
                </Link>
                
                <div className="payment-security">
                  <p>🔒 Paiement 100% sécurisé</p>
                  <div className="payment-methods">
                    💳 CB • PayPal • Apple Pay
                  </div>
                </div>
              </div>

              <div className="promo-code">
                <h4>Code promo</h4>
                <div className="promo-input">
                  <input 
                    type="text" 
                    placeholder="Entrez votre code"
                    className="promo-field"
                  />
                  <button className="apply-promo-btn">Appliquer</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="continue-shopping">
          <Link to="/shop" className="continue-link">
            ← Continuer les achats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;