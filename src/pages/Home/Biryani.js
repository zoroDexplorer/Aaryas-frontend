import React from 'react';
import './Item.css'; // Assuming you have additional styles here if needed

const Biryani = () => {
  const items = [
    { id: 1, name: 'Veg Biryani', price: '150/-', image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/biryani-recipe-1.jpg' },
    { id: 2, name: 'Chicken Fry Biryani', price: '230/-', image: 'https://recipes.net/wp-content/uploads/2023/05/chicken-biryani-recipe_a4e111d2dc037d303d5a149c106bb96e.jpeg' },
    { id: 3, name: 'Chicken Dum Biryani', price: '230/-', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/chicken-dum-biryani-500x375.jpg' },
    { id: 4, name: 'Mutton Biryani', price: '350/-', image: 'https://artofpalate.com/wp-content/uploads/2020/06/mutton-biryani.jpg' },
    { id: 5, name: 'Prawn Biryani', price: '350/-', image: 'https://www.kannammacooks.com/wp-content/uploads/prawn-biryani-eral-biriyani-recipe-1.jpg' },
    { id: 6, name: 'Fish Biryani', price: '350/-', image: 'https://ipoh.hyderabadrecipes.com.my/wp-content/uploads/2022/07/Fish-Biryani.jpg' },
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
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Biryani</h2>
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

export default Biryani;
