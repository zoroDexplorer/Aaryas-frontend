import React, { useState } from 'react';
import './Cart.css';

const CartPage = () => {
  const initialItems = [
    { id: 1, name: 'Chicken Biryani', price: 200, quantity: 1, image: 'food1.jpeg' },
    { id: 2, name: 'Idly', price: 50, quantity: 1, image: 'food2.jpeg' },
  ];

  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, x) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity + x, 1) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalMRP = items.reduce((y, item) => y + item.price * item.quantity, 0);
  const discount = 30;
  const totalAmount = totalMRP - discount;

  return (
    <div className="cart-page">
      <div className="banner">
        <img src="img.jpeg" alt="food Banner" />
      </div>
      <h2>Cart</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>price: {item.price}</p>
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
            <span>₹ {totalMRP}</span>
          </div>
          <div className="price-item">
            <span>Discount on MRP</span>
            <span>₹ -{discount}</span>
          </div>
        </div>
        <div className="total-amount">
          <span>Total Amount</span>
          <span>₹ {totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
