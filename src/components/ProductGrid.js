import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CarrinhoContext } from "../contexts/context";
export default function ProductGrid() {
    const [productQuantities, setProductQuantities] = React.useState(new Map());
    const toggleCounter = (productId) => {
        setProductQuantities((prevQuantities) => {
            const newQuantities = new Map(prevQuantities);
            if (!newQuantities.has(productId)) {
                newQuantities.set(productId, 1);
            }
            return newQuantities;
        });
    };
    const increaseQuantity = (productId) => {
        setProductQuantities((prevQuantities) => {
            const newQuantities = new Map(prevQuantities);
            newQuantities.set(productId, (newQuantities.get(productId) || 0) + 1);
            return newQuantities;
        });
    };
    const decreaseQuantity = (productId) => {
        setProductQuantities((prevQuantities) => {
            const newQuantities = new Map(prevQuantities);
            const currentQuantity = newQuantities.get(productId) || 0;
            if (currentQuantity > 1) {
                newQuantities.set(productId, currentQuantity - 1);
            }
            else {
                newQuantities.delete(productId);
            }
            return newQuantities;
        });
    };
    const products = [
        { id: 1, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00 },
        { id: 2, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00 },
        { id: 3, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00 },
        { id: 4, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00 },
        { id: 5, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00 },
    ];
    // Função para calcular o total
    const calculateTotal = () => {
        let total = 0;
        productQuantities.forEach((quantity, productId) => {
            const product = products.find((p) => p.id === productId);
            if (product) {
                total += product.price * quantity;
            }
        });
        return total.toFixed(2);
    };
    const GlobalState = React.useContext(CarrinhoContext);
    const dispatch = GlobalState.dispatch;
    return (_jsxs("div", { className: "container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2", children: [products.map((product) => (_jsxs(Card, { className: "shadow-lg text-hunterGreen relative", children: [_jsxs(CardHeader, { className: "relative", children: [_jsx("img", { className: "h-auto w-full rounded-t-md object-cover", src: product.image, alt: product.title }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: productQuantities.has(product.id) ? (_jsxs("div", { className: "bg-white bg-opacity-75 p-2 rounded-lg shadow-lg flex items-center space-x-4", children: [_jsx("button", { className: "w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold", onClick: () => {
                                                dispatch({ type: 'REMOVE', payload: product });
                                                decreaseQuantity(product.id);
                                            }, children: "-" }), _jsx("span", { className: "text-lg font-semibold text-gray-700", children: productQuantities.get(product.id) }), _jsx("button", { className: "w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold", onClick: () => {
                                                increaseQuantity(product.id);
                                                dispatch({ type: 'ADD', payload: product });
                                            }, children: "+" })] })) : (_jsx("button", { onClick: () => {
                                        toggleCounter(product.id);
                                        dispatch({ type: 'ADD', payload: product });
                                    }, className: "w-12 h-12 rounded-full bg-green-500 bg-opacity-75 flex items-center justify-center text-white text-2xl shadow-lg", children: "+" })) })] }), _jsxs(CardContent, { className: "text-center p-4", children: [_jsx(CardTitle, { className: "text-lg font-semibold", children: product.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: product.subtitle }), _jsxs("p", { className: "text-lg font-bold", children: ["R$ ", product.price.toFixed(2)] })] })] }, product.id))), _jsxs(Link, { to: "/Cart", className: "p-2 w-20 h-[100%] text-center bg-hunterGreen hover:bg-green-700 text-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center", children: [_jsx(ShoppingCartIcon, { className: "w-8 h-8 mb-1" }), _jsxs("span", { className: "total", children: ["R$ ", calculateTotal()] })] })] }));
}
