import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CarrinhoContext } from "../contexts/context";

export default function ProductGrid() {
  const [productQuantities, setProductQuantities] = React.useState(new Map());

  const toggleCounter = (productId: number) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = new Map(prevQuantities);
      if (!newQuantities.has(productId)) {
        newQuantities.set(productId, 1);
      }
      return newQuantities;
    });
  };
  
  const increaseQuantity = (productId: number) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = new Map(prevQuantities);
      newQuantities.set(productId, (newQuantities.get(productId) || 0) + 1);
      return newQuantities;
    });
  };
  
  const decreaseQuantity = (productId: number) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = new Map(prevQuantities);
      const currentQuantity = newQuantities.get(productId) || 0;
      if (currentQuantity > 1) {
        newQuantities.set(productId, currentQuantity - 1);
      } else {
        newQuantities.delete(productId);
      }
      return newQuantities;
    });
  };

  const products = [
    { id: 1, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00},
    { id: 2, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00},
    { id: 3, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00},
    { id: 4, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00},
    { id: 5, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: 50.00},
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
  const GlobalState = React.useContext(CarrinhoContext)
  const dispatch = GlobalState.dispatch
  return (
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
      {products.map((product) => (
        <Card key={product.id} className="shadow-lg text-hunterGreen relative">

          <CardHeader className="relative">
            <img
              className="h-auto w-full rounded-t-md object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {productQuantities.has(product.id) ? (
                <div className="bg-white bg-opacity-75 p-2 rounded-lg shadow-lg flex items-center space-x-4">
                  <button
                    className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold"
                    onClick={() => {
                      dispatch({type:'REMOVE',payload: product});
                      decreaseQuantity(product.id)
                    }}
                    
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-gray-700">
                    {productQuantities.get(product.id)}
                  </span>
                  <button
                    className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold"
                    onClick={() => {
                      increaseQuantity(product.id);
                      dispatch({type:'ADD',payload: product})
                  }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                onClick={() => {
                  toggleCounter(product.id);
                  dispatch({type:'ADD',payload: product})
              }}
                  className="w-12 h-12 rounded-full bg-green-500 bg-opacity-75 flex items-center justify-center text-white text-2xl shadow-lg"
                >
                  +
                </button>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="text-center p-4">
            <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{product.subtitle}</p>
            <p className="text-lg font-bold">R$ {product.price.toFixed(2)}</p>
          </CardContent>

        </Card>
      ))}
      
      {/* Botão para o carrinho com o total */}
      <Link 
        to="/Cart" 
        className="p-2 w-20 h-[100%] text-center bg-hunterGreen hover:bg-green-700 text-white rounded-full shadow-lg z-10 flex flex-col items-center justify-center"
      >
        <ShoppingCartIcon className="w-8 h-8 mb-1" />
        <span className="total">R$ {calculateTotal()}</span>
      </Link>
    </div>
  );
}
