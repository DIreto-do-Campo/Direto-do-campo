import React from 'react';
import { UserIcon, ShoppingCartIcon, MapIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-hunterGreen text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/public/LOGO.png" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-bold">DIRETO DO CAMPO</span>
        <span className="text-xs">Fresco & Saudável</span>
      </div>

      {/* Navegação */}
      <div className="flex space-x-8">
        <a href="/explore" className="hover:underline">
          <span className="flex items-center">
            <MapIcon className="h-5 w-5 mr-1" /> {/* Ícone de mapa */}
            Explore
          </span>
        </a>
        <a href="/sell-with-us" className="hover:underline">
          Venda com a gente
        </a>
      </div>

      {/* Ícones do usuário e carrinho */}
      <div className="flex items-center space-x-6">
        {/* Ícone de usuário */}
        <a href="/profile" className="relative">
          <UserIcon className="h-6 w-6" /> {/* Ícone de usuário */}
        </a>

        {/* Ícone de carrinho */}
        <a href="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6" /> {/* Ícone de carrinho */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
