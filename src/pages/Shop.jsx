import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
    types: [],
    materials: [],
    priceRanges: []
  });
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy]);

  const applyFilters = () => {
    let filtered = [...products];

    // Apply size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Apply type filter
    if (filters.types.length > 0) {
      filtered = filtered.filter(product => 
        filters.types.includes(product.type)
      );
    }

    // Apply material filter
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product => 
        filters.materials.includes(product.material)
      );
    }

    // Apply price range filter
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product => 
        filters.priceRanges.some(range => 
          product.price >= range.min && product.price <= range.max
        )
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'priceRanges') {
        const existingRangeIndex = newFilters.priceRanges.findIndex(
          range => range.label === value.label
        );
        
        if (existingRangeIndex > -1) {
          newFilters.priceRanges.splice(existingRangeIndex, 1);
        } else {
          newFilters.priceRanges.push(value);
        }
      } else {
        const currentFilter = newFilters[filterType];
        
        if (currentFilter.includes(value)) {
          newFilters[filterType] = currentFilter.filter(item => item !== value);
        } else {
          newFilters[filterType] = [...currentFilter, value];
        }
      }
      
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({
      sizes: [],
      colors: [],
      types: [],
      materials: [],
      priceRanges: []
    });
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="shop-header">
          <h1>Magasiner</h1>
          <p>Découvrez notre collection complète de mode urbaine écoresponsable</p>
        </div>

        <div className="shop-content">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          
          <ProductList 
            products={filteredProducts}
            addToCart={addToCart}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;