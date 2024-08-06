import React from 'react';
import './Item.css';

const Tiffins = () => {
  const items = [
    { id: 1, name: 'Idili', price: '30/-', image: 'https://static.wixstatic.com/media/c3517b_8001654cef164f3db9c6f026b28b6c67~mv2.jpg/v1/fill/w_620,h_330,al_c,q_80,enc_auto/c3517b_8001654cef164f3db9c6f026b28b6c67~mv2.jpg' },
    { id: 2, name: 'Dosa', price: '35/-', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOvY4AtCz2hjoEc8CaFf-AuebUMXugftBKA&s' },
    { id: 3, name: 'Poori', price: '35/-', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/poori-recipe-1.jpeg' },
    { id: 4, name: 'Vada', price: '40/-', image: 'https://c.ndtvimg.com/2023-09/u113o4r_medu-vada_625x300_06_September_23.jpg' },
    { id: 5, name: 'Mysore Bajji', price: '30/-', image: 'https://sabithavantalu.wordpress.com/wp-content/uploads/2015/03/img_7273.jpg' },
    { id: 6, name: 'Upma', price: '35/-', image: 'https://myfoodstory.com/wp-content/uploads/2022/11/Vegetable-Upma-3.jpg' },
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
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Tiffins</h2>
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

export default Tiffins;
