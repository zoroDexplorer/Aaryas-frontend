import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './pages/CartContext'; 
import Login from './pages/Login';
import Home from './pages/Home/Home';
import Chinese from './pages/Home/Chinese';
import Cakes from './pages/Home/Cakes';
import Tiffins from './pages/Home/Tiffins';
import CartPage from './pages/CartPage';
import Meals from './pages/Home/Meals';
import Snacks from './pages/Home/Snacks';
import Biryani from './pages/Home/Biryani';
import Profile from './pages/Profile';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/tiffins" element={<Tiffins />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
