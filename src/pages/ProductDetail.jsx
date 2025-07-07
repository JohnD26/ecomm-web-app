import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmationModal';
import productsData from '../data/products.json';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0] || '');
      setSelectedColor(foundProduct.colors[0] || '');
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Veuillez sélectionner une taille et une couleur');
      return;
    }

    const productToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity
    };

    addToCart(productToAdd);
    setAddedProduct(productToAdd);
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Veuillez sélectionner une taille et une couleur');
      return;
    }

    const productToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity
    };

    // Add to cart and redirect to checkout
    addToCart(productToAdd);
    navigate('/checkout');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAddedProduct(null);
    document.body.classList.remove('modal-open');
  };

  const handleContinueShopping = () => {
    handleCloseModal();
  };

  const handleGoToCart = () => {
    handleCloseModal();
    navigate('/cart');
  };

  // Fix: Get unique images, don't duplicate the main image
  const getProductImages = () => {
    if (product.images && product.images.length > 0) {
      return product.images;
    }
    return [product.image]; // Just return the single image if no images array
  };

  const handlePrevImage = () => {
    const images = getProductImages();
    setActiveImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    const images = getProductImages();
    setActiveImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <p>Produit non trouvé</p>
        </div>
      </div>
    );
  }

  const productImages = getProductImages();

  return (
    <>
      <div className="product-detail">
        <div className="container">
          <div className="product-detail-content">
            <div className="product-images">
              <div className="image-carousel">
                <div className="main-image">
                  <img 
                    src={`/assets/products/${productImages[activeImageIndex]}`} 
                    alt={`${product.name} ${activeImageIndex + 1}`}
                  />
                  {product.isNew && <span className="badge new">Nouveau</span>}
                  {product.isOnSale && <span className="badge sale">Promo</span>}
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {productImages.length > 1 && (
                    <>
                      <button 
                        className="carousel-btn prev-btn"
                        onClick={handlePrevImage}
                        aria-label="Image précédente"
                      >
                        ‹
                      </button>
                      <button 
                        className="carousel-btn next-btn"
                        onClick={handleNextImage}
                        aria-label="Image suivante"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image indicators */}
                {productImages.length > 1 && (
                  <div className="image-indicators">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`Voir image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Thumbnail strip - only show if multiple images */}
              {productImages.length > 1 && (
                <div className="thumbnail-images">
                  {productImages.map((image, index) => (
                    <img
                      key={index}
                      src={`/assets/products/${image}`}
                      alt={`${product.name} ${index + 1}`}
                      className={index === activeImageIndex ? 'active' : ''}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-price">
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}$</span>
                )}
                <span className="current-price">{product.price}$</span>
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-material">
                <h3>Matière</h3>
                <p>{product.material}</p>
              </div>

              <div className="product-options">
                <div className="size-selector">
                  <h3>Taille</h3>
                  <div className="size-options">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="color-selector">
                  <h3>Couleur</h3>
                  <div className="color-options">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="quantity-selector">
                  <h3>Quantité</h3>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="quantity-display">{quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                >
                  Ajouter au panier
                </button>
                <button 
                  className="buy-now-btn"
                  onClick={handleBuyNow}
                >
                  Acheter maintenant
                </button>
              </div>

              <div className="product-care">
                <h3>Instructions d'entretien</h3>
                <ul>
                  <li>Lavage en machine à 30°C</li>
                  <li>Séchage à l'air libre recommandé</li>
                  <li>Repassage à basse température</li>
                  <li>Ne pas nettoyer à sec</li>
                </ul>
              </div>

              <div className="product-features">
                <h3>Caractéristiques</h3>
                <ul>
                  <li>✓ Matières écoresponsables</li>
                  <li>✓ Coupe moderne et confortable</li>
                  <li>✓ Résistant au lavage</li>
                  <li>✓ Produit en Europe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onClose={handleCloseModal}
        product={addedProduct}
        onContinueShopping={handleContinueShopping}
        onGoToCart={handleGoToCart}
      />
    </>
  );
};

export default ProductDetail;