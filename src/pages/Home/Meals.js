import React from 'react';
import './Item.css';

const Chinese = () => {
  const items = [
    { id: 1, name: 'Veg Meals', price: '70/-', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaoapAZLNd4jPLNVTtr0z6mISq9eWEUGwdw&s' },
    { id: 2, name: 'Non Veg Meals', price: '95/-', image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/South_Indian_non-veg_Meals.jpg' },
  ];

  const handleBackClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-4">
        <button onClick={handleBackClick} className="bg-gray-800 text-white px-4 py-2 rounded-full">← Back</button>
      </header>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Meals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="border border-gray-700 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="aspect-w-1 aspect-h-1">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mt-2 font-bold text-orange-500">{item.name}</h3>
                <p className="text-white">{item.price}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2 hover:bg-orange-600">
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
