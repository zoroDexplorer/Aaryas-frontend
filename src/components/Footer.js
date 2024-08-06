import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Person } from '@mui/icons-material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonClass = (path) => {
    return location.pathname === path ? 'bg-white text-orange-500 rounded-full p-2' : 'text-white';
  };

  return (
    <div className="bg-orange-600 text-white fixed bottom-0 w-full flex justify-around items-center p-2">
      <div className="relative flex-1 flex justify-center" onClick={() => navigate('/')}>
        <div className={`cursor-pointer ${getButtonClass('/')}`}>
          <Home className="w-6 h-6" />
        </div>
      </div>
      <div className="relative flex-1 flex justify-center" onClick={() => navigate('/cart')}>
        <div className={`cursor-pointer ${getButtonClass('/cart')}`}>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </div>
      <div className="relative flex-1 flex justify-center" onClick={() => navigate('/tracking')}>
        <div className={`cursor-pointer ${getButtonClass('/tracking')}`}>
          <DeliveryDiningIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="relative flex-1 flex justify-center" onClick={() => navigate('/profile')}>
        <div className={`cursor-pointer ${getButtonClass('/profile')}`}>
          <Person className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
