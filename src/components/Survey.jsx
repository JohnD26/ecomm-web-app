

import React, { useState } from 'react';

const Survey = ({ onSubmit }) => {
  const [responses, setResponses] = useState({
    rating: 0,
    experience: '',
    improvements: [],
    recommend: '',
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 'rating',
      type: 'rating',
      title: 'Comment évalues-tu ton expérience sur CityDrip ?',
      subtitle: 'Donne-nous une note de 1 à 5 étoiles',
      required: true
    },
    {
      id: 'experience',
      type: 'radio',
      title: 'Comment s\'est passée ta navigation sur notre site ?',
      subtitle: 'Aide-nous à comprendre ton parcours',
      options: [
        { value: 'excellent', label: 'Excellent - J\'ai adoré naviguer', emoji: '🤩' },
        { value: 'good', label: 'Bien - Navigation fluide et intuitive', emoji: '😊' },
        { value: 'okay', label: 'Correct - Quelques petites difficultés', emoji: '😐' },
        { value: 'poor', label: 'Difficile - J\'ai eu du mal à trouver', emoji: '😕' }
      ],
      required: true
    },
    {
      id: 'improvements',
      type: 'checkbox',
      title: 'Que pourrions-nous améliorer ?',
      subtitle: 'Sélectionne tout ce qui t\'intéresse (optionnel)',
      options: [
        { value: 'products', label: 'Plus de choix de produits', emoji: '👕' },
        { value: 'search', label: 'Meilleurs filtres de recherche', emoji: '🔍' },
        { value: 'photos', label: 'Photos produits plus détaillées', emoji: '📸' },
        { value: 'sizes', label: 'Guide des tailles interactif', emoji: '📏' },
        { value: 'delivery', label: 'Plus d\'options de livraison', emoji: '🚚' },
        { value: 'prices', label: 'Prix plus compétitifs', emoji: '💰' }
      ]
    },
    {
      id: 'recommend',
      type: 'radio',
      title: 'Recommanderais-tu CityDrip à tes amis ?',
      subtitle: 'Ta recommandation compte énormément pour nous',
      options: [
        { value: 'definitely', label: 'Absolument !', emoji: '🔥' },
        { value: 'probably', label: 'Probablement', emoji: '👍' },
        { value: 'maybe', label: 'Peut-être', emoji: '🤔' },
        { value: 'unlikely', label: 'Peu probable', emoji: '👎' },
        { value: 'never', label: 'Jamais', emoji: '❌' }
      ],
      required: true
    },
    {
      id: 'comments',
      type: 'textarea',
      title: 'Un dernier mot ?',
      subtitle: 'Partage tes pensées, suggestions ou compliments (optionnel)',
      placeholder: 'Dis-nous ce que tu penses vraiment... On écoute ! 💬'
    }
  ];

  const handleRatingChange = (rating) => {
    setResponses(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (questionId, value) => {
    if (questionId === 'improvements') {
      setResponses(prev => {
        const currentImprovements = prev.improvements || [];
        const isSelected = currentImprovements.includes(value);
        
        return {
          ...prev,
          improvements: isSelected
            ? currentImprovements.filter(item => item !== value)
            : [...currentImprovements, value]
        };
      });
    } else {
      setResponses(prev => ({ ...prev, [questionId]: value }));
    }
  };

  const handleNext = () => {
    const currentQ = questions[currentQuestion];
    if (currentQ.required && !responses[currentQ.id]) {
      alert('Cette question est obligatoire 😊');
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(responses);
    setIsSubmitted(true);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const canProceed = !questions[currentQuestion].required || responses[questions[currentQuestion].id];

  const getRatingText = (rating) => {
    const texts = ['', 'Très insatisfait 😞', 'Insatisfait 😐', 'Neutre 🙂', 'Satisfait 😊', 'Très satisfait 🤩'];
    return texts[rating] || '';
  };

  if (isSubmitted) {
    return (
      <div className="survey-success">
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark">✓</div>
          </div>
        </div>
        <div className="success-content">
          <h3>Merci pour ton retour ! 🙏</h3>
          <p>Ton avis nous aide à nous améliorer chaque jour</p>
          <div className="success-stats">
            {/* <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">questions répondues</span>
            </div> */}
            {/* <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">minutes économisées</span>
            </div> */}
            {/* <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">d'impact</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="survey-container">
      <div className="survey-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          {currentQuestion + 1} sur {questions.length}
        </span>
      </div>

      <div className="survey-card">
        <div className="question-header">
          <h2 className="question-title">{currentQ.title}</h2>
          <p className="question-subtitle">{currentQ.subtitle}</p>
        </div>

        <div className="question-content">
          {currentQ.type === 'rating' && (
            <div className="rating-section">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    className={`star ${responses.rating >= star ? 'active' : ''}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <p className="rating-feedback">{getRatingText(responses.rating)}</p>
            </div>
          )}

          {currentQ.type === 'radio' && (
            <div className="radio-grid">
              {currentQ.options.map(option => (
                <label key={option.value} className="radio-card">
                  <input
                    type="radio"
                    name={currentQ.id}
                    value={option.value}
                    checked={responses[currentQ.id] === option.value}
                    onChange={(e) => handleInputChange(currentQ.id, e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="radio-emoji">{option.emoji}</span>
                    <span className="radio-label">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          )}

          {currentQ.type === 'checkbox' && (
            <div className="checkbox-grid">
              {currentQ.options.map(option => (
                <label key={option.value} className="checkbox-card">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={responses.improvements?.includes(option.value) || false}
                    onChange={(e) => handleInputChange(currentQ.id, e.target.value)}
                  />
                  <div className="checkbox-content">
                    <span className="checkbox-emoji">{option.emoji}</span>
                    <span className="checkbox-label">{option.label}</span>
                  </div>
                </label>
              ))}
            </div>
          )}

          {currentQ.type === 'textarea' && (
            <div className="textarea-section">
              <textarea
                value={responses.comments}
                onChange={(e) => handleInputChange(currentQ.id, e.target.value)}
                placeholder={currentQ.placeholder}
                className="survey-textarea"
                rows="6"
              />
            </div>
          )}
        </div>

        <div className="survey-navigation">
          <button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            ← Précédent
          </button>
          
          {isLastQuestion ? (
            <button 
              onClick={handleSubmit}
              className="nav-btn submit-btn"
            >
              Envoyer 🚀
            </button>
          ) : (
            <button 
              onClick={handleNext}
              disabled={!canProceed}
              className="nav-btn next-btn"
            >
              Suivant →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;