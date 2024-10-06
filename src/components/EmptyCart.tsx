import React from 'react';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">Seu carrinho está vazio!</h1>
      <p className="text-lg mb-6 text-black">Adicione produtos para finalizar sua compra.</p>
      <a href="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Continuar comprando
      </button>
      </a>
    </div>
  );
};

export default EmptyCart;