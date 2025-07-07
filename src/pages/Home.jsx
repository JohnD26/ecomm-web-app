// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [showPromoBanner, setShowPromoBanner] = useState(false);
//   const [showFloatingPromo, setShowFloatingPromo] = useState(false);

//   useEffect(() => {
//     // Show promo banner after a short delay
//     const timer = setTimeout(() => {
//       setShowPromoBanner(true);
//       document.body.classList.add('promo-banner-visible');
//     }, 500);

//     // Show floating promo after longer delay (alternative option)
//     const floatingTimer = setTimeout(() => {
//       setShowFloatingPromo(true);
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(floatingTimer);
//     };
//   }, []);

//   const closePromoBanner = () => {
//     setShowPromoBanner(false);
//     document.body.classList.remove('promo-banner-visible');
//   };

//   const closeFloatingPromo = () => {
//     setShowFloatingPromo(false);
//   };

//   return (
//     <div className="home">
//       {/* Top Promo Banner */}
//       {showPromoBanner && (
//         <div className="promo-banner">
//           <div className="promo-banner-content">
//             <p className="promo-text">
//               🔥 <span className="highlight">-20% sur tous les hoodies</span> cette semaine !
//             </p>
//             <Link to="/shop?type=Hoodie" className="promo-cta">
//               Jetez un coup d'œil aux promos →
//             </Link>
//             <button 
//               className="promo-close" 
//               onClick={closePromoBanner}
//               aria-label="Fermer la bannière promo"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Alternative: Floating Promo Card */}
//       {showFloatingPromo && !showPromoBanner && (
//         <div className="floating-promo">
//           <button 
//             className="floating-promo-close" 
//             onClick={closeFloatingPromo}
//             aria-label="Fermer la promo"
//           >
//             ×
//           </button>
//           <h3>🎉 Promo spéciale !</h3>
//           <p>Profitez de -20% sur tous les hoodies avec le code URBAN20</p>
//           <Link to="/shop?type=Hoodie" className="floating-promo-cta">
//             Voir les promos
//           </Link>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title">Découvre notre nouvelle collection été</h1>
//           <p className="hero-subtitle">
//             Mode urbaine écoresponsable qui s'adapte à ton style unique
//           </p>
//           <Link to="/shop" className="cta-button">
//             Magasiner maintenant
//           </Link>
//         </div>
//         <div className="hero-image">
//           <img src="/assets/products/hero-image.jpg" alt="Collection été CityDrip" />
//         </div>
//       </section>

//       {/* Category Showcase */}
//       <section className="category-showcase">
//         <div className="container">
//           <h2>Magasiner par catégorie</h2>
//           <div className="category-grid">
//             <div className="category-card">
//               <img src="/assets/categories/hoodies.jpg" alt="Hoodies" />
//               <div className="category-overlay">
//                 <h3>Hoodies & Sweats</h3>
//                 <p>Confort et style pour tous les jours</p>
//                 <Link to="/shop?type=Hoodie" className="category-btn">
//                   Découvrir
//                 </Link>
//               </div>
//             </div>
//             <div className="category-card">
//               <img src="/assets/categories/tshirts.jpg" alt="T-shirts" />
//               <div className="category-overlay">
//                 <h3>T-shirts</h3>
//                 <p>Essentiels pour toutes les occasions</p>
//                 <Link to="/shop?type=T-shirt" className="category-btn">
//                   Voir la collection
//                 </Link>
//               </div>
//             </div>
//             <div className="category-card">
//               <img src="/assets/categories/pants.jpg" alt="Pantalons" />
//               <div className="category-overlay">
//                 <h3>Pantalons</h3>
//                 <p>Style et confort réunis</p>
//                 <Link to="/shop?type=Pantalon" className="category-btn">
//                   Explorer
//                 </Link>
//               </div>
//             </div>
//             <div className="category-card">
//               <img src="/assets/categories/dresses.jpg" alt="Robes" />
//               <div className="category-overlay">
//                 <h3>Robes</h3>
//                 <p>Élégance et féminité</p>
//                 <Link to="/shop?type=T-shirt" className="category-btn">
//                   Découvrir
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Deal of the Day */}
//       <section className="deal-of-day">
//         <div className="container">
//           <div className="deal-content">
//             <h2>Deal du jour</h2>
//             <p>-20% sur tous les hoodies cette semaine !</p>
//             <p className="deal-code">Code: <strong>URBAN20</strong></p>
//             <Link to="/shop?type=Hoodie" className="deal-button">
//               Voir les hoodies
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Découvre notre nouvelle collection été</h1>
          <p className="hero-subtitle">
            Mode urbaine écoresponsable qui s'adapte à ton style unique
          </p>
          <Link to="/shop" className="cta-button">
            Magasiner maintenant
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/products/hero-image.jpg" alt="Collection été UrbanWear" />
        </div>
      </section>

      {/* Category Showcase */}
      <section className="category-showcase">
        <div className="container">
          <h2>Magasiner par catégorie</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src="/assets/categories/hoodies.jpg" alt="Hoodies" />
              <div className="category-overlay">
                <h3>Hoodies & Sweats</h3>
                <p>Confort et style pour tous les jours</p>
                <Link to="/shop?type=Hoodie" className="category-btn">
                  Découvrir
                </Link>
              </div>
            </div>
            <div className="category-card">
              <img src="/assets/categories/tshirts.jpg" alt="T-shirts" />
              <div className="category-overlay">
                <h3>T-shirts</h3>
                <p>Essentiels pour toutes les occasions</p>
                <Link to="/shop?type=T-shirt" className="category-btn">
                  Voir la collection
                </Link>
              </div>
            </div>
            <div className="category-card">
              <img src="/assets/categories/pants.jpg" alt="Pantalons" />
              <div className="category-overlay">
                <h3>Pantalons</h3>
                <p>Style et confort réunis</p>
                <Link to="/shop?type=Pantalon" className="category-btn">
                  Explorer
                </Link>
              </div>
            </div>
            <div className="category-card">
              <img src="/assets/categories/dresses.jpg" alt="Robes" />
              <div className="category-overlay">
                <h3>Robes</h3>
                <p>Élégance et féminité</p>
                <Link to="/shop?type=T-shirt" className="category-btn">
                  Découvrir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="deal-of-day">
        <div className="container">
          <div className="deal-content">
            <h2>🔥 Deal du jour</h2>
            <p><strong>-20% sur tous les hoodies cette semaine !</strong></p>
            <p className="deal-code">Code: <strong>URBAN20</strong></p>
            <Link to="/shop?type=Hoodie" className="deal-button">
              Jetez un coup d'œil aux promos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;