import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import EmptyCart from '../components/EmptyCart';
import { CarrinhoContext } from '../contexts/context';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "../../components/ui/table";
const Cart = () => {
    const GlobalState = useContext(CarrinhoContext);
    const itens = GlobalState.state;
    // Calcular as quantidades por ID
    const idQuantidade = itens.reduce((acc, item) => {
        const found = acc.find(el => el.id === item.id);
        if (found) {
            found.quantidade += 1;
        }
        else {
            acc.push({ id: item.id, quantidade: 1 });
        }
        return acc;
    }, []);
    // Calcular o total geral com verificação de produto existente
    const totalGeral = idQuantidade.reduce((acc, item) => {
        const produto = itens.find(coisa => coisa.id === item.id);
        return produto ? acc + produto.price * item.quantidade : acc;
    }, 0);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "navbar text-hunterGreen", children: [_jsx(Navbar, {}), _jsx("div", { children: itens.length === 0 ? (_jsx(EmptyCart, {})) : (_jsxs("div", { className: "w-[80%] mx-auto", children: [_jsxs(Table, { className: "bg-white shadow rounded-md", children: [_jsx(TableCaption, { className: "p-10 font-semibold text-3xl", children: "Sua lista de compras" }), _jsx(TableHeader, { children: _jsxs(TableRow, { className: "px-10", children: [_jsx(TableHead, { className: "w-[100px] text-center", children: "Foto" }), _jsx(TableHead, { className: "text-center", children: "Descri\u00E7\u00E3o" }), _jsx(TableHead, { className: "text-center", children: "Quantidade" }), _jsx(TableHead, { className: "text-center", children: "Pre\u00E7o" }), _jsx(TableHead, { className: "text-center", children: "Total" })] }) }), _jsxs(TableBody, { className: "px-10", children: [idQuantidade.map((item) => {
                                                const produto = itens.find(coisa => coisa.id === item.id);
                                                if (!produto)
                                                    return null; // Ignorar se o produto não for encontrado
                                                return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx("img", { src: produto.image, alt: "Item Image" }) }), _jsx(TableCell, { className: "text-center", children: produto.title }), _jsx(TableCell, { className: "text-center", children: item.quantidade }), _jsx(TableCell, { className: "text-center", children: produto.price.toFixed(2) }), _jsx(TableCell, { className: "text-center", children: (produto.price * item.quantidade).toFixed(2) })] }, item.id));
                                            }), _jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 4, className: "text-right font-semibold", children: "Total Geral:" }), _jsx(TableCell, { className: "text-center font-semibold", children: totalGeral.toFixed(2) })] })] })] }), _jsx("div", { className: "flex justify-end mt-4", children: _jsx("button", { className: "bg-hunterGreen text-white px-6 py-2 rounded-md font-semibold hover:bg-green-900 transition", children: "Pagar" }) })] })) })] }) }));
};
export default Cart;
