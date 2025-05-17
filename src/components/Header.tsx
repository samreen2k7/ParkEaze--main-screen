import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-sans">
        <span className="font-bold text-blue-800">PARKEAZE</span>
        <span className="text-gray-700"> – Parking made easier</span>
      </h1>
    </header>
  );
};

export default Header;