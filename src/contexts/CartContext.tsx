import React, { createContext, useContext, useState, ReactNode } from 'react';

// Interface para o produto
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity?: number;
}

// Interface para o valor do contexto do carrinho
interface CartContextType {
  cartItems: Map<number, Product>;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
  clearCart: () => void;
}

// Criação do contexto com o tipo CartContextType ou undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Map<number, Product>>(new Map());

  const addItemToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const newItems = new Map(prevItems);
      if (newItems.has(product.id)) {
        newItems.set(product.id, {
          ...product,
          quantity: newItems.get(product.id)!.quantity! + 1,
        });
      } else {
        newItems.set(product.id, { ...product, quantity: 1 });
      }
      return newItems;
    });
  };

  const removeItemFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const newItems = new Map(prevItems);
      newItems.delete(productId);
      return newItems;
    });
  };

  const clearCart = () => setCartItems(new Map());

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook useCart com o tipo CartContextType
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
