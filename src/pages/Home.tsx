import React, { useContext } from 'react';

import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { CarrinhoContext } from '../contexts/context';
import { Link } from 'react-router-dom';



const Home = () => {
    const GlobalState = useContext(CarrinhoContext)
    console.log('ola mundo', GlobalState)
    return (

        <div className="max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col">
            <Navbar />

            {/* Banner com imagens */}
            <div className="relative w-full flex">
                <div className="w-1/2">
                    <img
                        className="w-full h-[300px] object-cover"
                        src="/AgriculturaFam.jpg"
                        alt="Agricultura Familiar"
                    />
                </div>
                <div className="w-1/2">
                    <img
                        className="w-full h-[300px] object-cover"
                        src="/queijo artesanal.jpeg"
                        alt="Agricultura Familiar"
                    />
                </div>

                {/* Texto e input centralizados */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        Nossos Produtores Locais
                    </h2>
                    <input
                        className="w-[600px] h-10 rounded-lg px-4 text-gray-700 placeholder-gray-400"
                        type="search"
                        placeholder="O que vai ser hoje?"
                        name="produtores"
                        id="p1"
                    />
                </div>
            </div>

            {/* Grid de produtos */}
            <div className="container mx-auto bg-white rounded-[15px] py-4 mt-12 flex justify-center w-[90%] relative">
                <ProductGrid />

                {/* Botão de seta para o carrinho */}

            </div>

            <div className="bg-amethyst relative text-white container mx-auto rounded-[15px] py-8 mt-4 w-[90%] px-4">
                <div className="flex items-center">
                    <img src="/dolarcoin.png" alt="Ícone Dólar" className="w-6 h-auto" />
                    <h2 className="text-lg mx-2">Juntos Pela Agricultura Familiar</h2>
                </div>
                <p className="mt-4 text-justify text-sm">
                    Venda direto para o consumidor final, do seu jeito e no seu tempo. Nosso objetivo é ajudar pequenos agricultores a ter um negócio rentável e continuar alimentando nossa sociedade.
                </p>
            </div>

            <div className="bg-areia/60 relative container mx-auto rounded-[15px] mt-4 w-[90%] p-0">
                <div className="w-1/2">
                    <img
                        className="w-full h-[300px] object-cover rounded-l-[15px]"
                        src="/agricultora.png"
                        alt="Agricultura Familiar"
                    />
                </div>

                <div className="w-1/2 left-[52%] absolute top-4">
                    <span className='bg-white p-1 text-sm rounded-sm font-medium text-hunterGreen'>Top Farm</span>
                    <h2 className='my-4 text-lg font-semibold'>VIDEO PITCH</h2>
                    <Link to={'https://youtu.be/REqr2nS-_Ew?si=_h1laMTJQ5t14nwL'} target="_blank" className="text-blue-500 underline">
                        Esse é o link do vídeo pitch no YouTube
                    </Link>
                </div>

            </div>

            <Footer />
        </div>

    );
};

export default Home;
