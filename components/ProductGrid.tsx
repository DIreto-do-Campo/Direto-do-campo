import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";


export default function ProductGrid() {
  const products = [
    { id: 1, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00", },
    { id: 2, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    { id: 3, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    { id: 4, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
  ];

  return (
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
      {products.map((product) => (
        <Card key={product.id} className="shadow-lg text-hunterGreen">
          <CardHeader>
            <img
              className="h-auto w-full rounded-t-md"
              src={product.image}
              alt={product.title}
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-sm font-semibold">{product.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{product.subtitle}</p>
            <p className="text-md font-bold">{product.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
