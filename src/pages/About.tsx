import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col">
            <Navbar />

            {/* Banner com imagens */}
            <div className="relative w-full flex">
                

                {/* Texto centralizado */}
                <div className="container text-center w-[90%] mx-auto mt-8">
                    <h1 className="text-hunterGreen text-center text-3xl font-bold mb-4">
                        Sobre o Projeto
                    </h1>
                </div>
            </div>

            {/* Seção sobre o projeto */}
            <div className="container mx-auto text-hunterGreen bg-white rounded-[15px] py-8 mt-12 flex flex-col items-center w-[90%]">
                <h2 className="text-2xl font-semibold text-center mb-6">Motivações do Projeto</h2>
                <p className=" text-lg text-justify px-6">
                    O projeto <strong>Direto do Campo</strong> foi desenvolvido para resolver os desafios da insegurança alimentar e da falta de visibilidade dos pequenos agricultores e pescadores artesanais no Brasil. Nossa missão é conectar diretamente os produtores aos consumidores, criando um marketplace que favoreça o comércio justo e a sustentabilidade, proporcionando acesso a alimentos frescos e saudáveis de origem conhecida.
                </p>
            </div>

            {/* Alinhamento com ODS */}
            <div className="bg-amethyst text-white container mx-auto rounded-[15px] py-8 mt-8 w-[90%] px-6">
                <h2 className="text-lg font-semibold mb-4">Alinhamento com a ODS 2</h2>
                <p className="text-sm">
                    Alinhado com a Meta 2.3 da ODS 2 (Fome Zero e Agricultura Sustentável), o projeto visa dobrar a produtividade agrícola e a renda dos pequenos produtores até 2030, promovendo práticas agrícolas sustentáveis e a erradicação da fome. A plataforma <strong>Direto do Campo</strong> cria uma ponte entre os pequenos produtores e os consumidores, contribuindo para a segurança alimentar e o desenvolvimento sustentável.
                </p>
            </div>

            
            

            <Footer />
        </div>
    );
};

export default About;
