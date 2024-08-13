import React, { useContext,useEffect } from 'react';
import './Item.css';
import { CartContext } from '../CartContext'; 
import { toast } from 'react-toastify';

const Chinese = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Veg Noodles ', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtHkeg3ozBJdDw_AxSa-F_y7X1UDMc8VjKw&s' },
    { id: 2, name: 'Egg Noodles ', price: 95, image: 'https://www.kannammacooks.com/wp-content/uploads/stir-fried-egg-hakka-noodles-1-2.jpg' },
    { id: 3, name: 'Veg Manchuria ', price: 65, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKRWki9CZFtsc4UAsXoTFdvVyOxknmsk3OA&s' },
    { id: 4, name: 'Egg Manchuria', price: 80, image: 'https://static.toiimg.com/thumb/62554826.cms?width=1200&height=900' },
    { id: 5, name: 'Veg Fried Rice', price: 70, image: 'https://www.sharmispassions.com/wp-content/uploads/2011/01/VegFriedRice2.jpg' },
    { id: 6, name: 'Egg Fried Rice ', price: 100, image: 'https://www.kannammacooks.com/wp-content/uploads/egg-fried-rice-recipe.jpg' },
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
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Chinese</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="border border-gray-700 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="aspect-w-1 aspect-h-1">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mt-2 font-bold text-orange-500">{item.name}</h3>
                <p className="text-white">₹{item.price}</p>
                <button 
                  className="bg-orange-500 text-white px-4 py-2 rounded mt-2 hover:bg-orange-600"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chinese;
