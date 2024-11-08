import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, ShoppingCartIcon, MapIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="bg-hunterGreen h-16 text-white px-6 py-4 flex justify-between items-center rounded-t-[19px]">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center space-x-2">
          <img src="/LOGO.png" alt="Logo" className="h-10" />
        </div>
      </Link>

      {/* Navegação */}
      <div className="flex space-x-8">
        <Link to="/explore" className="text-white">
          <span className="flex items-center">
            <MapIcon className="h-5 w-5 mr-1" /> {/* Ícone de mapa */}
            Explore
          </span>
        </Link>
        <Link to="/About" className="text-white">
          <span className="flex items-center">
            <InformationCircleIcon className="h-5 w-5 mr-1" /> {/* Ícone de informação */}
            Sobre o Projeto
          </span>
        </Link>
        <Link to="/Farm" className="text-white">
          Venda com a gente
        </Link>
      </div>

      {/* Ícones do usuário e carrinho */}
      <div className="flex items-center space-x-6">
        {/* Ícone de usuário */}
        <div className="bg-white rounded-full w-10">
          <Link to="/Login" className="relative flex items-center">
            <UserCircleIcon className="h-6 w-6 text-hunterGreen ml-[3px]" /> {/* Ícone de usuário */}
            <ChevronDownIcon className="h-6 w-6 text-hunterGreen ml-1" />
          </Link>
        </div>

        {/* Ícone de carrinho */}
        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-white" /> {/* Ícone de carrinho */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
