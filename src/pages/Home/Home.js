import React from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main content */}
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">
          Enjoy Our <span className="text-orange-500">😋</span><br />
          <span className="text-orange-500">Delicious Food</span>
        </h1>

        {/* Search bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search food"
            className="w-full p-2 pr-10 rounded-full bg-gray-800 text-white"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            🎤
          </button>
        </div>

        {/* Special Offer */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Special Offer</h2>
          <div className="rounded-lg text-black p-2">
            <img
              src="/img/offer.jpg" // Replace this with the actual path to your image
              alt="Special Food Menu"
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto h-auto rounded-lg mb-2"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="menu grid grid-cols-3 gap-6 p-1">
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/biryani')}>
              <div className="ring-container">
                <img src="/img/biryani-removebg-preview.png" alt="Biryani's" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Biryani's</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/chinese')}>
              <div className="ring-container">
                <img src="/img/chinese-removebg-preview.png" alt="Chinese" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Chinese</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/tiffins')}>
              <div className="ring-container">
                <img src="/img/tiffins-removebg-preview.png" alt="Tiffin's" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Tiffin's</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/meals')}>
              <div className="ring-container">
                <img src="/img/meals-removebg-preview.png" alt="Meals" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Meals</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/snacks')}>
              <div className="ring-container">
                <img src="/img/snacks-removebg-preview.png" alt="Snacks" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Snacks</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center cursor-pointer" onClick={() => navigate('/cakes')}>
              <div className="ring-container">
                <img src="/img/cakes-removebg-preview.png" alt="Cakes" className="w-24 h-24 mx-auto mb-2" />
              </div>
              <p className="text-sm">Cakes</p>
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

export default Home;
