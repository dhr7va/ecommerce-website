import React, { useState } from 'react';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => setCartVisible(!cartVisible);

  return (
    <>
      {/* Pass toggleCartVisibility to Header */}
      <Header onCartClick={toggleCartVisibility} />
      <HeaderTwo />
      <main>
        <ProductList />
      </main>
      {/* Pass cartVisible and toggleCartVisibility to Cart */}
      <Cart cartVisible={cartVisible} onClose={toggleCartVisibility} />
      <Footer />
    </>
  );
};

export default App;
