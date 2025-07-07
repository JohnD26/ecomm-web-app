import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import SurveyPage from './pages/SurveyPage';

// Import all CSS files
import './styles/reset.css';
import './styles/main.css';
import './styles/header.css';
import './styles/deals-banner.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/product-card.css';
import './styles/product-list.css';
import './styles/filter-sidebar.css';
import './styles/shop.css';
import './styles/cart.css';
import './styles/checkout.css';
import './styles/step-indicator.css';
import './styles/survey.css';
import './styles/thank-you.css';
import './styles/confirmation-modal.css';
import './styles/utils.css';
import './styles/product-detail.css';

function App() {
  const [cart, setCart] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.size === product.size && 
        item.color === product.color
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && 
          item.size === product.size && 
          item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (productId, size, color, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId, size, color);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={getCartCount()} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/shop" 
              element={<Shop addToCart={addToCart} />} 
            />
            <Route 
              path="/product/:id" 
              element={<ProductDetail addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  totalPrice={getTotalPrice()}
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cart={cart}
                  totalPrice={getTotalPrice()}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  clearCart={clearCart}
                />
              } 
            />
            <Route 
              path="/thank-you" 
              element={<ThankYou />} 
            />
            <Route 
              path="/survey" 
              element={<SurveyPage />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
// import CartPage from './pages/CartPage';
// import Checkout from './pages/Checkout';
// import ThankYou from './pages/ThankYou';
// import SurveyPage from './pages/SurveyPage';

// // Import all CSS files
// import './styles/reset.css';
// import './styles/main.css';
// import './styles/header.css';
// import './styles/deals-banner.css';
// import './styles/footer.css';
// import './styles/home.css';
// import './styles/product-card.css';
// import './styles/product-detail.css';
// import './styles/product-list.css';
// import './styles/filter-sidebar.css';
// import './styles/shop.css';
// import './styles/cart.css';
// import './styles/checkout.css';
// import './styles/step-indicator.css';
// import './styles/survey.css';
// import './styles/thank-you.css';
// import './styles/confirmation-modal.css';
// import './styles/utils.css';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [currentStep, setCurrentStep] = useState(2); // Start at step 2 for checkout

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => 
//         item.id === product.id && 
//         item.size === product.size && 
//         item.color === product.color
//       );
      
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id && 
//           item.size === product.size && 
//           item.color === product.color
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
      
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId, size, color) => {
//     setCart(prevCart => 
//       prevCart.filter(item => 
//         !(item.id === productId && item.size === size && item.color === color)
//       )
//     );
//   };

//   const updateQuantity = (productId, size, color, newQuantity) => {
//     if (newQuantity === 0) {
//       removeFromCart(productId, size, color);
//       return;
//     }
    
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId && item.size === size && item.color === color
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const getCartCount = () => {
//     return cart.reduce((count, item) => count + item.quantity, 0);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header cartCount={getCartCount()} />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route 
//               path="/shop" 
//               element={<Shop addToCart={addToCart} />} 
//             />
//             <Route 
//               path="/product/:id" 
//               element={<ProductDetail addToCart={addToCart} />} 
//             />
//             <Route 
//               path="/cart" 
//               element={
//                 <CartPage 
//                   cart={cart}
//                   removeFromCart={removeFromCart}
//                   updateQuantity={updateQuantity}
//                   totalPrice={getTotalPrice()}
//                 />
//               } 
//             />
//             <Route 
//               path="/checkout" 
//               element={
//                 <Checkout 
//                   cart={cart}
//                   totalPrice={getTotalPrice()}
//                   currentStep={currentStep}
//                   setCurrentStep={setCurrentStep}
//                   clearCart={clearCart}
//                 />
//               } 
//             />
//             <Route 
//               path="/thank-you" 
//               element={<ThankYou />} 
//             />
//             <Route 
//               path="/survey" 
//               element={<SurveyPage />} 
//             />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;