import React from 'react';

const MenuItem = ({ title, image, onClick }) => {
  return (
    <div className="menu-item flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ring-4 ring-orange-500 ring-offset-2 rounded-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 text-center text-lg font-bold text-orange-500">{title}</h3>
    </div>
  );
};

export default MenuItem;
