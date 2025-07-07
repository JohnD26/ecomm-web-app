import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const ProductCard = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [isConfirmationStep, setIsConfirmationStep] = useState(true);
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const quickAddProduct = {
      ...product,
      size: 'M', // Default size for quick add
      color: product.colors[0] // Default color
    };
    
    setPendingProduct(quickAddProduct);
    setIsConfirmationStep(true);
    setShowModal(true);
    
    // Add class to body to prevent scrolling
    document.body.classList.add('modal-open');
  };

  const handleConfirmAdd = () => {
    // Add to cart
    addToCart(pendingProduct);
    
    // Switch to success view
    setIsConfirmationStep(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPendingProduct(null);
    setIsConfirmationStep(true);
    document.body.classList.remove('modal-open');
  };

  const handleContinueShopping = () => {
    handleCloseModal();
  };

  const handleGoToCart = () => {
    handleCloseModal();
    navigate('/cart');
  };

  return (
    <>
      <div className="product-card">
        <Link to={`/product/${product.id}`} className="product-link">
          <div className="product-image">
            <img src={`/assets/products/${product.image || 'placeholder.jpg'}`} alt={product.name} />
            {product.isNew && <span className="badge new">Nouveau</span>}
            {product.isOnSale && <span className="badge sale">Promo</span>}
          </div>
          
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-material">{product.material}</p>
            
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <span 
                  key={index} 
                  className="color-name"
                  title={color}
                >
                  {color}
                </span>
              ))}
            </div>
            
            <div className="product-price">
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}$</span>
              )}
              <span className="current-price">{product.price}$</span>
            </div>
          </div>
        </Link>
        
        <button 
          className="quick-add-btn"
          onClick={handleQuickAdd}
          aria-label={`Ajouter ${product.name} au panier`}
        >
          Ajouter au panier
        </button>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onClose={handleCloseModal}
        product={pendingProduct}
        onContinueShopping={handleContinueShopping}
        onGoToCart={handleGoToCart}
        isConfirmationStep={isConfirmationStep}
        onConfirmAdd={handleConfirmAdd}
      />
    </>
  );
};

export default ProductCard;