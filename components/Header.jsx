// src/components/Header.jsx
import { BarChart2, Users, Calendar, Dumbbell } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log('Toggling menu, isOpen:', !isOpen); // Debug
    setIsOpen((prev) => !prev); // Use functional update
  };

  return (
    <header className="bg-white shadow-md py-4 px-4 md:px-6 flex justify-between items-center border-b border-gray-200 relative">
      <div className="flex items-center space-x-2">
        <Dumbbell className="w-8 h-8 text-red-600" />
        <span className="text-3xl font-bold text-gray-800">FitFlow</span>
      </div>
      <button
        className="md:hidden text-gray-800 focus:outline-none z-10"
        onClick={handleToggle}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:space-x-6 absolute md:static top-16 right-4 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none w-48 md:w-auto z-0`}
      >
        <Link to="/" className="block md:inline-flex items-center space-x-2 hover:text-orange-600 py-2 md:py-0">
          <BarChart2 className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/members" className="block md:inline-flex items-center space-x-2 hover:text-orange-600 py-2 md:py-0">
          <Users className="w-5 h-5" />
          <span>Members</span>
        </Link>
        <Link to="/classes" className="block md:inline-flex items-center space-x-2 hover:text-orange-600 py-2 md:py-0">
          <Calendar className="w-5 h-5" />
          <span>Classes</span>
        </Link>
        <Link
          to="/memberships"
          className="block md:inline-flex items-center bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300 mt-2 md:mt-0"
        >
          Memberships
        </Link>
      </nav>
    </header>
  );
};

export default Header;