import React from 'react';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

const App = () => (
  <>
    <Header />
    <HeaderTwo />
    <main>
      <ProductList />
    </main>
    <Footer />
  </>
);

export default App;
