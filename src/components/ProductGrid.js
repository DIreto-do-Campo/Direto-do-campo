import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
export default function ProductGrid() {
    const products = [
        { id: 1, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00", },
        { id: 2, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
        { id: 3, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
        { id: 4, image: "/public/verduras.jpg", title: "Cesta de legumes", subtitle: "(semanal)", price: "R$ 50,00" },
    ];
    return (_jsx("div", { className: "container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2", children: products.map((product) => (_jsxs(Card, { className: "shadow-lg text-hunterGreen", children: [_jsx(CardHeader, { children: _jsx("img", { className: "h-auto w-full rounded-t-md", src: product.image, alt: product.title }) }), _jsxs(CardContent, { className: "text-center", children: [_jsx(CardTitle, { className: "text-sm font-semibold", children: product.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: product.subtitle }), _jsx("p", { className: "text-md font-bold", children: product.price })] })] }, product.id))) }));
}
