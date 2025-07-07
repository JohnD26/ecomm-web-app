import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'name', label: 'Nom A-Z' },
    { value: 'price-low', label: 'Prix croissant' },
    { value: 'price-high', label: 'Prix décroissant' },
    { value: 'newest', label: 'Plus récent' }
  ];

  return (
    <div className="product-list">
      <div className="product-list-header">
        <div className="results-count">
          {products.length} produit{products.length !== 1 ? 's' : ''} trouvé{products.length !== 1 ? 's' : ''}
        </div>
        
        <div className="sort-controls">
          <label htmlFor="sort-select">Trier par:</label>
          <select 
            id="sort-select"
            value={sortBy} 
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="no-products">
          <p>Aucun produit ne correspond à vos critères.</p>
          <p>Essayez de modifier vos filtres ou de parcourir toute notre collection.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;