// import React from 'react';
// import { Link } from 'react-router-dom';

// const ConfirmationModal = ({ isOpen, onClose, product, onContinueShopping, onGoToCart }) => {
//   if (!isOpen || !product) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h3>Produit ajouté au panier ! 🎉</h3>
//           <button className="close-btn" onClick={onClose} aria-label="Fermer">
//             ✕
//           </button>
//         </div>
        
//         <div className="modal-content">
//           <div className="product-summary">
//             <div className="product-image">
//               <img src={`/assets/products/${product.image || 'placeholder.jpg'}`} alt={product.name} />
//             </div>
            
//             <div className="product-details">
//               <h4>{product.name}</h4>
//               <p className="product-specs">
//                 {product.size && `Taille: ${product.size}`}
//                 {product.size && product.color && ' | '}
//                 {product.color && `Couleur: ${product.color}`}
//               </p>
//               <p className="product-material">{product.material}</p>
//               <div className="product-price">
//                 <span className="price">{product.price}$</span>
//                 {product.quantity && <span className="quantity">Qté: {product.quantity}</span>}
//               </div>
//             </div>
//           </div>
          
//           <div className="success-message">
//             <div className="success-icon">✓</div>
//             <p>Votre article a été ajouté avec succès à votre panier</p>
//           </div>
//         </div>
        
//         <div className="modal-actions">
//           <button 
//             className="continue-shopping-btn"
//             onClick={onContinueShopping}
//           >
//             Continuer les achats
//           </button>
          
//           <button 
//             className="go-to-cart-btn"
//             onClick={onGoToCart}
//           >
//             Voir le panier
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationModal;




import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  product, 
  onContinueShopping, 
  onGoToCart,
  isConfirmationStep = true,
  onConfirmAdd 
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {isConfirmationStep 
              ? "Ajouter au panier ?" 
              : "Produit ajouté au panier ! 🎉"
            }
          </h3>
          <button className="close-btn" onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>
        
        <div className="modal-content">
          <div className="product-summary">
            <div className="product-image">
              <img src={`/assets/products/${product.image || 'placeholder.jpg'}`} alt={product.name} />
            </div>
            
            <div className="product-details">
              <h4>{product.name}</h4>
              <p className="product-specs">
                {product.size && `Taille: ${product.size}`}
                {product.size && product.color && ' | '}
                {product.color && `Couleur: ${product.color}`}
              </p>
              <p className="product-material">{product.material}</p>
              <div className="product-price">
                <span className="price">{product.price}$</span>
                {product.quantity && <span className="quantity">Qté: {product.quantity}</span>}
              </div>
            </div>
          </div>
          
          {!isConfirmationStep && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Votre article a été ajouté avec succès à votre panier</p>
            </div>
          )}
        </div>
        
        <div className="modal-actions">
          {isConfirmationStep ? (
            <>
              <button 
                className="continue-shopping-btn"
                onClick={onClose}
              >
                Annuler
              </button>
              
              <button 
                className="go-to-cart-btn"
                onClick={onConfirmAdd}
              >
                Confirmer l'ajout
              </button>
            </>
          ) : (
            <>
              <button 
                className="continue-shopping-btn"
                onClick={onContinueShopping}
              >
                Continuer les achats
              </button>
              
              <button 
                className="go-to-cart-btn"
                onClick={onGoToCart}
              >
                Voir le panier
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;