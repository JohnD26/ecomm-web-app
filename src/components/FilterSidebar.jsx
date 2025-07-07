// import React from 'react';

// const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
//   const handleFilterChange = (filterType, value) => {
//     onFilterChange(filterType, value);
//   };

//   const sizes = ['XS', 'S', 'M', 'L', 'XL'];
//   const colors = ['Noir', 'Blanc', 'Bleu', 'Rouge', 'Vert', 'Gris'];
//   const types = ['T-shirt', 'Hoodie', 'Pantalon', 'Veste', 'Accessoire'];
//   const materials = ['Coton bio', 'Polyester recyclé', 'Lin', 'Laine mérinos'];
//   const priceRanges = [
//     { label: '0-25$', min: 0, max: 25 },
//     { label: '25-50$', min: 25, max: 50 },
//     { label: '50-75$', min: 50, max: 75 },
//     { label: '75$+', min: 75, max: 999 }
//   ];

//   return (
//     <div className="filter-sidebar">
//       <div className="filter-header">
//         <h3>Filtres</h3>
//         <button 
//           className="clear-filters-btn"
//           onClick={onClearFilters}
//         >
//           Effacer tout
//         </button>
//       </div>

//       <div className="filter-section">
//         <h4>Taille</h4>
//         <div className="filter-options">
//           {sizes.map(size => (
//             <label key={size} className="filter-option">
//               <input
//                 type="checkbox"
//                 checked={filters.sizes.includes(size)}
//                 onChange={(e) => handleFilterChange('sizes', size)}
//               />
//               <span>{size}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h4>Couleur</h4>
//         <div className="filter-options">
//           {colors.map(color => (
//             <label key={color} className="filter-option color-option">
//               <input
//                 type="checkbox"
//                 checked={filters.colors.includes(color)}
//                 onChange={(e) => handleFilterChange('colors', color)}
//               />
//               <span className="color-checkbox">
//                 <span 
//                   className="color-preview" 
//                   style={{ backgroundColor: color.toLowerCase() }}
//                 ></span>
//                 {color}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h4>Type</h4>
//         <div className="filter-options">
//           {types.map(type => (
//             <label key={type} className="filter-option">
//               <input
//                 type="checkbox"
//                 checked={filters.types.includes(type)}
//                 onChange={(e) => handleFilterChange('types', type)}
//               />
//               <span>{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h4>Matière</h4>
//         <div className="filter-options">
//           {materials.map(material => (
//             <label key={material} className="filter-option">
//               <input
//                 type="checkbox"
//                 checked={filters.materials.includes(material)}
//                 onChange={(e) => handleFilterChange('materials', material)}
//               />
//               <span>{material}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h4>Prix</h4>
//         <div className="filter-options">
//           {priceRanges.map(range => (
//             <label key={range.label} className="filter-option">
//               <input
//                 type="checkbox"
//                 checked={filters.priceRanges.some(r => r.label === range.label)}
//                 onChange={(e) => handleFilterChange('priceRanges', range)}
//               />
//               <span>{range.label}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;



import React from 'react';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Noir', 'Blanc', 'Bleu', 'Rouge', 'Vert', 'Gris'];
  const types = ['T-shirt', 'Hoodie', 'Pantalon', 'Veste', 'Accessoire'];
  const materials = ['Coton bio', 'Polyester recyclé', 'Lin', 'Laine mérinos'];
  const priceRanges = [
    { label: '0-25$', min: 0, max: 25 },
    { label: '25-50$', min: 25, max: 50 },
    { label: '50-75$', min: 50, max: 75 },
    { label: '75$+', min: 75, max: 999 }
  ];

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>Filtres</h3>
        <button 
          className="clear-filters-btn"
          onClick={onClearFilters}
        >
          Effacer tout
        </button>
      </div>

      <div className="filter-section">
        <h4>Taille</h4>
        <div className="filter-options">
          {sizes.map(size => (
            <label key={size} className="filter-option">
              <input
                type="checkbox"
                checked={filters.sizes.includes(size)}
                onChange={(e) => handleFilterChange('sizes', size)}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Couleur</h4>
        <div className="filter-options">
          {colors.map(color => (
            <label key={color} className="filter-option">
              <input
                type="checkbox"
                checked={filters.colors.includes(color)}
                onChange={(e) => handleFilterChange('colors', color)}
              />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Type</h4>
        <div className="filter-options">
          {types.map(type => (
            <label key={type} className="filter-option">
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={(e) => handleFilterChange('types', type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Matière</h4>
        <div className="filter-options">
          {materials.map(material => (
            <label key={material} className="filter-option">
              <input
                type="checkbox"
                checked={filters.materials.includes(material)}
                onChange={(e) => handleFilterChange('materials', material)}
              />
              <span>{material}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Prix</h4>
        <div className="filter-options">
          {priceRanges.map(range => (
            <label key={range.label} className="filter-option">
              <input
                type="checkbox"
                checked={filters.priceRanges.some(r => r.label === range.label)}
                onChange={(e) => handleFilterChange('priceRanges', range)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;