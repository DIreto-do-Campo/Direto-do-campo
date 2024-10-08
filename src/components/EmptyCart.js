import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const EmptyCart = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [_jsx("h1", { className: "text-3xl font-bold mb-4 text-black", children: "Seu carrinho est\u00E1 vazio!" }), _jsx("p", { className: "text-lg mb-6 text-black", children: "Adicione produtos para finalizar sua compra." }), _jsx("a", { href: "/", children: _jsx("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Continuar comprando" }) })] }));
};
export default EmptyCart;
