import React from 'react';
import Navbar from '../components/Navbar';


const Home = () => {
    return (
        <div
          className="min-h-screen bg-cinereous"
        >
          <Navbar />
          <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center">Bem-vindo ao Direto do Campo</h1>
            <p className="text-center mt-4">
              Descubra produtos frescos e saudáveis diretamente dos nossos produtores locais.
            </p>
          </div>
        </div>
      );
    };

export default Home;
