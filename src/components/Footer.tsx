import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white p-6 mt-6 rounded-b-[15px] relative">
            {/* Linha horizontal e logo */}
            <div className="flex items-center justify-between w-[80%] mx-auto my-4">
                <div className="h-[2px] bg-white w-full"></div>
                <img src="/LOGO.png" alt="Logo" className="h-12 ml-4" />
            </div>

            {/* Bloco de navegação */}
            <div className="container mx-auto gap-10 flex justify-start w-[80%]">
                <div>
                    <h3 className="font-bold">COMPRE</h3>
                    <p>Compre de produtores locais</p>
                    <p>Suporte ao cliente</p>
                </div>
                <div>
                    <h3 className="font-bold">VENDA</h3>
                    <p>Comece a vender agora</p>
                    <p>Junte-se a nós</p>
                </div>
                <div>
                    <h3 className="font-bold">SOBRE NÓS</h3>
                    <p>Compre de produtores locais</p>
                    <p>Suporte ao cliente</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
