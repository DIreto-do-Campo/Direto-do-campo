import React, { useState } from 'react';
import { UserCircleIcon, ShoppingCartIcon, MapIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-hunterGreen h-16 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/public/LOGO.png" alt="Logo" className="h-10" />
      </div>

      {/* Navegação */}
      <div className="flex space-x-8">
        <a href="/explore" className=" text-white">
          <span className="flex items-center">
            <MapIcon className="h-5 w-5 mr-1" /> {/* Ícone de mapa */}
            Explore
          </span>
        </a>
        <a href="/sell-with-us" className="text-white">
          Venda com a gente
        </a>
      </div>

      {/* Ícones do usuário e carrinho */}
      <div className="flex items-center space-x-6">
        {/* Dropdown de usuário */}
        <div className="relative">
          
            <button
              className="flex items-center bg-white rounded-full w-10 h-10 justify-center focus:outline-none"
              onClick={toggleDropdown}
            >
              <div className='flex items-center bg-white rounded-full w-10 h-10 justify-center focus:outline-none'>
                <UserCircleIcon className="h-6 w-6 text-hunterGreen" /> {/* Ícone de usuário */}
                {isDropdownOpen ? (
                  <ChevronUpIcon className="h-5 w-5 text-hunterGreen ml-1" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-hunterGreen ml-1" />
                )}
              </div>
            </button>
          

          {/* Menu suspenso */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <ul className="py-1 text-hunterGreen">
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Favorite Farms
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Account
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Ícone de carrinho */}
        <a href="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-white" /> {/* Ícone de carrinho */}
        </a>
      </div>
    </nav >
  );
};

export default Navbar;
