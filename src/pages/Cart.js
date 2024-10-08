import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import EmptyCart from '../components/EmptyCart';
const Cart = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "navbar", children: [_jsx(Navbar, {}), _jsx("div", { children: _jsx(EmptyCart, {}) })] }) }));
};
export default Cart;
