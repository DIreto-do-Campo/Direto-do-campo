import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
// Criação do contexto com o tipo CartContextType ou undefined
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(new Map());
    const addItemToCart = (product) => {
        setCartItems((prevItems) => {
            const newItems = new Map(prevItems);
            if (newItems.has(product.id)) {
                newItems.set(product.id, {
                    ...product,
                    quantity: newItems.get(product.id).quantity + 1,
                });
            }
            else {
                newItems.set(product.id, { ...product, quantity: 1 });
            }
            return newItems;
        });
    };
    const removeItemFromCart = (productId) => {
        setCartItems((prevItems) => {
            const newItems = new Map(prevItems);
            newItems.delete(productId);
            return newItems;
        });
    };
    const clearCart = () => setCartItems(new Map());
    return (_jsx(CartContext.Provider, { value: { cartItems, addItemToCart, removeItemFromCart, clearCart }, children: children }));
};
// Hook useCart com o tipo CartContextType
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};
