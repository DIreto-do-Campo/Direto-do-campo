import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Context } from './contexts/context';
createRoot(document.getElementById('root')).render(_jsx(Context, { children: _jsx(App, {}) }));
