import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../pages/CartContext';
import Footer from '../components/Footer'; // Adjust the path if necessary

const CartPage = () => {
  const { items, updateQuantity, removeItem } = useContext(CartContext);

  const totalMRP = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 30;
  const totalAmount = totalMRP - discount;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="cart-page">
          <div className="banner">
            <img src="/img/img.jpeg" alt="food Banner" />
          </div>
          <h2>Cart</h2>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button className="remove-item" onClick={() => removeItem(item.id)}>×</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="price-details">
            <h2>Price Details</h2>
            <div className="price-breakdown">
              <div className="price-item">
                <span>Total MRP</span>
                <span>₹{totalMRP}</span>
              </div>
              <div className="price-item">
                <span>Discount on MRP</span>
                <span>₹-{discount}</span>
              </div>
            </div>
            <div className="total-amount">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </main>
      <div className='mt-10'>
      <Footer />
      </div>
      
    </div>
  );
};

export default CartPage;
