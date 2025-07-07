import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from '../components/StepIndicator';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = ({ cart, totalPrice, currentStep, setCurrentStep, clearCart }) => {
  const navigate = useNavigate();
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const finalTotal = totalPrice + shipping;

  useEffect(() => {
    // Only redirect to cart if empty AND we're not processing an order
    if (cart.length === 0 && currentStep <= 2) {
      navigate('/cart');
    }
  }, [cart, navigate, currentStep]);

  const handleNext = (formData) => {
    if (currentStep === 3) {
      // Process payment (mock)
      console.log('Processing payment with data:', formData);
      
      // Clear cart and set step to completion
      clearCart();
      setCurrentStep(4);
      
      // Navigate to thank you page
      setTimeout(() => {
        navigate('/thank-you');
      }, 100); // Small delay to ensure state updates
      
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 2) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/cart');
    }
  };

  // Don't redirect if we're in the final step or completing order
  if (cart.length === 0 && currentStep <= 2) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-header">
          <h1>Finaliser votre commande</h1>
          <StepIndicator currentStep={currentStep} />
        </div>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <CheckoutForm 
              onNext={handleNext}
              onPrevious={handlePrevious}
              currentStep={currentStep}
            />
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Votre commande</h3>
              
              <div className="order-items">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="order-item">
                    <div className="item-image">
                      <img src={`/assets/products/${item.image || 'placeholder.jpg'}`} alt={item.name} />
                      <span className="item-quantity">{item.quantity}</span>
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>{item.size} | {item.color}</p>
                      <span className="item-price">{(item.price * item.quantity).toFixed(2)}$</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="summary-line">
                  <span>Sous-total ({itemCount} article{itemCount !== 1 ? 's' : ''})</span>
                  <span>{totalPrice.toFixed(2)}$</span>
                </div>
                
                <div className="summary-line">
                  <span>Livraison</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="free-shipping">Gratuite</span>
                    ) : (
                      `${shipping}$`
                    )}
                  </span>
                </div>
                
                <div className="summary-line total">
                  <span>Total</span>
                  <span>{finalTotal.toFixed(2)}$</span>
                </div>
              </div>

              <div className="checkout-benefits">
                <div className="benefit">
                  <span className="benefit-icon">🚚</span>
                  <span>Livraison en 2-3 jours ouvrés</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">↩️</span>
                  <span>Retours gratuits sous 30 jours</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🔒</span>
                  <span>Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;