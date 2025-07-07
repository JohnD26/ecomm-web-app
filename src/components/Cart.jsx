import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (item, newQuantity) => {
    updateQuantity(item.id, item.size, item.color, newQuantity);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id, item.size, item.color);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h3>Votre panier est vide</h3>
        <p>Découvrez notre collection et ajoutez vos articles préférés !</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="cart-item">
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-specs">
                Taille: {item.size} | Couleur: {item.color}
              </p>
              <p className="cart-item-material">{item.material}</p>
            </div>
            
            <div className="cart-item-quantity">
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(item, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(item, item.quantity + 1)}
              >
                +
              </button>
            </div>
            
            <div className="cart-item-price">
              <span className="item-total">{(item.price * item.quantity).toFixed(2)}$</span>
              <span className="unit-price">{item.price}$ / unité</span>
            </div>
            
            <button 
              className="remove-btn"
              onClick={() => handleRemove(item)}
              aria-label={`Supprimer ${item.name} du panier`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;