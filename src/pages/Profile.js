import React from 'react';
import { Avatar } from '@mui/material';
import { Person, ShoppingCart, Policy, Settings, Help, ExitToApp } from '@mui/icons-material';

const Profile = () => {
  return (
    <div className="p-4 bg-black text-white flex-grow">
      <div className="flex flex-col items-center space-y-2">
        <Avatar className="bg-orange-500">D</Avatar>
        <h1 className="text-xl">Durgesh</h1>
      </div>
      <div className="mt-4">
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <Person style={{ color: 'white' }} />
          <span className="ml-2">Profile</span>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <ShoppingCart style={{ color: 'white' }} />
          <span className="ml-2">My Orders</span>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <Policy style={{ color: 'white' }} />
          <span className="ml-2">Privacy Policy</span>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <Settings style={{ color: 'white' }} />
          <span className="ml-2">Settings</span>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <Help style={{ color: 'white' }} />
          <span className="ml-2">Help</span>
        </div>
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700">
          <ExitToApp style={{ color: 'white' }} />
          <span className="ml-2">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
