import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../CartContext';
import './Item.css';

const Cakes = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Strawberry Cake', price: 40, image: 'https://aclassictwist.com/wp-content/uploads/2020/08/Fresh-Strawberry-Cake-with-Strawberry-Frosting-3-480x270.jpg' },
    { id: 2, name: 'Chocolate Cake', price: 45, image: 'https://www.loveandoliveoil.com/wp-content/uploads/2022/01/sour-cream-chocolate-cake-5.jpg' },
    { id: 3, name: 'Pineapple Pastry', price: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8oJP6AoH5xGPwEarbHlFCXxU-sKKvzcyTA&s' },
    { id: 4, name: 'Vanilla Cake', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2WykAyo-XM2T6eu3T8xM6yIlBygrzcfxAw&s'},
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.href = '/home';
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-4">
        <button onClick={handleBackClick} className="bg-gray-800 text-white px-4 py-2 rounded-full">← Back</button>
      </header>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Cakes</h2>
        <div className="grid grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item.id} className="border border-gray-700 p-4 rounded-lg bg-gray-900">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="font-bold text-orange-500">{item.name}</h3>
              <p className="text-white">₹{item.price}</p>
              <button 
                className="bg-orange-500 text-white px-4 py-2 rounded mt-2 hover:bg-orange-600"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cakes;
