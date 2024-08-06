import React from 'react';
import './Item.css';

const Snacks = () => {
  const items = [
    { id: 1, name: 'Samosa', price: '30/-', image: 'https://www.awesomecuisine.com/wp-content/uploads/2014/11/vegetable-samosa.jpg' },
    { id: 2, name: 'Puff', price: '35/-', image: 'https://www.secondrecipe.com/wp-content/uploads/2020/03/air-fryer-vegetable-puffs-500x500.jpg' },
    { id: 3, name: 'Soups', price: '35/-', image: 'https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg' },
    { id: 4, name: 'Biscuits', price: '40/-', image: 'https://i.ytimg.com/vi/VC5eTLnj7pA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcGitA--QuUDaDLtG0Uj42eXUJRQ' },
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
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Snacks</h2>
        <div className="grid grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item.id} className="border border-gray-700 p-4 rounded-lg bg-gray-900">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="font-bold text-orange-500">{item.name}</h3>
              <p className="text-white">{item.price}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2 hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snacks;
