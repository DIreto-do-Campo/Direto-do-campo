import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

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
      newQuantities.set(productId, newQuantities.get(productId) + 1);
      return newQuantities;
    });
  };

  const decreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = new Map(prevQuantities);
      const currentQuantity = newQuantities.get(productId);
      if (currentQuantity > 1) {
        newQuantities.set(productId, currentQuantity - 1);
      } else {
        newQuantities.delete(productId);
      }
      return newQuantities;
    });
  };

  const products = [
    { id: 1, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    { id: 2, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    { id: 3, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    { id: 4, image: "/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
  ];

  return (
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
      {products.map((product) => (
        <Card key={product.id} className="shadow-lg text-hunterGreen relative">

          <CardHeader className="relative">
            <img
              className="h-auto w-full rounded-t-md"
              src={product.image}
              alt={product.title}
            />
            <CardContent className="text-center">
              <CardTitle className="text-sm font-semibold">{product.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{product.subtitle}</p>
              <p className="text-md font-bold">{product.price}</p>
            </CardContent>
            {/* Botão + ou contador no canto inferior direito */}
            {productQuantities.has(product.id) ? (
              <div className="absolute bottom-2 right-2 flex items-center bg-white p-1 rounded-full shadow-md space-x-2">
                <button
                  className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <span className="text-sm font-semibold text-gray-700">
                  {productQuantities.get(product.id)}
                </span>
                <button
                  className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => toggleCounter(product.id)}
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-500 shadow-md"
              >
                +
              </button>
            )}
          </CardHeader>

        </Card>
      ))}
    </div>
  );
}
