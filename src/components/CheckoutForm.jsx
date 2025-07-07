import React, { useState } from 'react';

const CheckoutForm = ({ onNext, onPrevious, currentStep }) => {
  const [formData, setFormData] = useState({
    // Shipping information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    
    // Payment information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 2) {
      // Validate shipping information
      if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
      if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
      if (!formData.email.trim()) newErrors.email = 'Email requis';
      if (!formData.address.trim()) newErrors.address = 'Adresse requise';
      if (!formData.city.trim()) newErrors.city = 'Ville requise';
      if (!formData.postalCode.trim()) newErrors.postalCode = 'Code postal requis';
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }
    }

    if (currentStep === 3) {
      // Validate payment information
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Numéro de carte requis';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Date d\'expiration requise';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV requis';
      if (!formData.cardholderName.trim()) newErrors.cardholderName = 'Nom du titulaire requis';
      
      // Basic card number validation (16 digits)
      const cardRegex = /^\d{16}$/;
      if (formData.cardNumber && !cardRegex.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Numéro de carte invalide (16 chiffres)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext(formData);
    }
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value.replace(/\D/g, ''));
    if (formatted.length <= 19) { // 16 digits + 3 spaces
      setFormData(prev => ({ ...prev, cardNumber: formatted }));
    }
  };

  return (
    <div className="checkout-form">
      {currentStep === 2 && (
        <div className="shipping-form">
          <h3>Informations de livraison</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Prénom *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Nom *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Adresse *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">Ville *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="postalCode">Code postal *</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={errors.postalCode ? 'error' : ''}
              />
              {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="France">France</option>
              <option value="Belgique">Belgique</option>
              <option value="Suisse">Suisse</option>
              <option value="Luxembourg">Luxembourg</option>
            </select>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="payment-form">
          <h3>Informations de paiement</h3>
          <p className="security-notice">🔒 Rassure-toi, tes données sont en sécurité avec nous.</p>
          
          <div className="form-group">
            <label htmlFor="cardholderName">Nom du titulaire *</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              className={errors.cardholderName ? 'error' : ''}
            />
            {errors.cardholderName && <span className="error-message">{errors.cardholderName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Numéro de carte *</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              className={errors.cardNumber ? 'error' : ''}
            />
            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Date d'expiration *</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/AA"
                className={errors.expiryDate ? 'error' : ''}
              />
              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="cvv">CVV *</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="3"
                className={errors.cvv ? 'error' : ''}
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>
          </div>
        </div>
      )}

      <div className="form-actions">
        {currentStep > 2 && (
          <button 
            type="button" 
            className="prev-btn"
            onClick={onPrevious}
          >
            ← Retour
          </button>
        )}
        
        <button 
          type="button" 
          className="next-btn"
          onClick={handleNext}
        >
          {currentStep === 3 ? 'Finaliser la commande' : 'Continuer →'}
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;