import React from 'react';
import Survey from '../components/Survey';

const SurveyPage = () => {
  const handleSurveySubmit = (responses) => {
    console.log('Survey responses:', responses);

  };

  return (
    <div className="survey-page">
      <div className="container">
        <div className="survey-header">
          <h1>Ton opinion compte pour nous 💬</h1>
          <p>Aide-nous à créer la meilleure expérience possible en partageant ton retour</p>
          <div className="survey-benefits">
            <div className="benefit">
              <span className="benefit-icon">⚡</span>
              <span>Seulement 2 minutes</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🎯</span>
              <span>Améliore notre service</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">💚</span>
              <span>Impact direct sur nos produits</span>
            </div>
          </div>
        </div>

        <div className="survey-content">
          <Survey onSubmit={handleSurveySubmit} />
        </div>

        {/* <div className="survey-footer">
          <p>Merci de prendre le temps de nous aider à nous améliorer !</p>
          <p>Tes réponses sont confidentielles et utilisées uniquement pour améliorer CityDrip.</p>
        </div> */}
      </div>
    </div>
  );
};

export default SurveyPage;