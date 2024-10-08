import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importando as páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Farm from './pages/Farm';
import VemComAGente from './pages/VemComAGente';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Map from './pages/Map';
import About from './pages/About';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/Farm", element: _jsx(Farm, {}) }), _jsx(Route, { path: "/VemComAGente", element: _jsx(VemComAGente, {}) }), _jsx(Route, { path: "/explore", element: _jsx(Map, {}) }), _jsx(Route, { path: '/Cart', element: _jsx(Cart, {}) }), _jsx(Route, { path: '/About', element: _jsx(About, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
export default App;
