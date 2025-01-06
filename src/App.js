import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import About from './Pages/About';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Cart />
    <Footer />
  </Router>
);

export default App;
