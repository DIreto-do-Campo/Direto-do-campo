import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import EmptyCart from '../components/EmptyCart';
import { CarrinhoContext } from '../contexts/context';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

interface ItemQuantidade {
    id: number;
    quantidade: number;
}

const Cart = () => {
    const GlobalState = useContext(CarrinhoContext);
    const itens = GlobalState.state;

    // Calcular as quantidades por ID
    const idQuantidade = itens.reduce((acc: ItemQuantidade[], item) => {
        const found = acc.find(el => el.id === item.id);
        if (found) {
            found.quantidade += 1;
        } else {
            acc.push({ id: item.id, quantidade: 1 });
        }
        return acc;
    }, [] as ItemQuantidade[]);

    // Calcular o total geral com verificação de produto existente
    const totalGeral = idQuantidade.reduce((acc, item) => {
        const produto = itens.find(coisa => coisa.id === item.id);
        return produto ? acc + produto.price * item.quantidade : acc;
    }, 0);

    return (
        <>
            <div className="navbar text-hunterGreen">
                <Navbar />
                <div>
                    {itens.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <div className="w-[80%] mx-auto">
                            <Table className="bg-white shadow rounded-md">
                                <TableCaption className="p-10 font-semibold text-3xl">
                                    Sua lista de compras
                                </TableCaption>
                                <TableHeader>
                                    <TableRow className="px-10">
                                        <TableHead className="w-[100px] text-center">Foto</TableHead>
                                        <TableHead className="text-center">Descrição</TableHead>
                                        <TableHead className="text-center">Quantidade</TableHead>
                                        <TableHead className="text-center">Preço</TableHead>
                                        <TableHead className="text-center">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="px-10">
                                    {idQuantidade.map((item) => {
                                        const produto = itens.find(coisa => coisa.id === item.id);
                                        if (!produto) return null; // Ignorar se o produto não for encontrado

                                        return (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <img src={produto.image} alt="Item Image" />
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {produto.title}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {item.quantidade}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {produto.price.toFixed(2)}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {(produto.price * item.quantidade).toFixed(2)}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {/* Linha de Total Geral */}
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-right font-semibold">
                                            Total Geral:
                                        </TableCell>
                                        <TableCell className="text-center font-semibold">
                                            {totalGeral.toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            {/* Botão de Pagar abaixo da tabela */}
                            <div className="flex justify-end mt-4">
                                <button className="bg-hunterGreen text-white px-6 py-2 rounded-md font-semibold hover:bg-green-900 transition">
                                    Pagar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
