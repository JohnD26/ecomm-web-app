import React from 'react';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Panier', description: 'Vérifier vos articles' },
    { number: 2, title: 'Livraison', description: 'Informations de livraison' },
    { number: 3, title: 'Paiement', description: 'Méthode de paiement' },
    { number: 4, title: 'Confirmation', description: 'Commande confirmée' }
  ];

  return (
    <div className="step-indicator">
      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
          >
            <div className="step-circle">
              {currentStep > step.number ? (
                <span className="check-icon">✓</span>
              ) : (
                <span className="step-number">{step.number}</span>
              )}
            </div>
            
            <div className="step-content">
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`step-connector ${currentStep > step.number ? 'completed' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;