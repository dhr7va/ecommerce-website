import React, { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => setCartVisible(true);
  const handleCartClose = () => setCartVisible(false);

  return (
    <>
      <Header onCartClick={handleCartClick} />
      <main>
        <ProductList />
      </main>
      <Cart cartVisible={cartVisible} onClose={handleCartClose} />
      <Footer />
    </>
  );
};

export default App;
