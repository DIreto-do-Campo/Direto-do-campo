import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Seu carrinho está vazio!</h1>
      <p className="text-lg mb-6 text-black">Adicione produtos para finalizar sua compra.</p>
      <Link to="/">
        <button className="bg-hunterGreen hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Continuar comprando
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
