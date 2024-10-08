import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
const Login = () => {
    return (_jsxs("div", { className: "max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex-grow flex justify-center items-center", children: _jsx(LoginForm, {}) })] }));
};
export default Login;
