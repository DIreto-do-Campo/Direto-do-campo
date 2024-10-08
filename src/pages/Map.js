import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Map = () => {
    const farmers = [
        {
            geocode: [-25.411901992543395, -49.377550434970495],
            texto: "Sitio novo 1"
        },
        {
            geocode: [-25.480990569299106, -49.390199708855306],
            texto: "Sitio novo 2"
        },
        {
            geocode: [-25.333729120493004, -49.296332111738685],
            texto: "Sitio novo 3"
        },
    ];
    return (_jsxs("div", { className: "max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col", children: [_jsx(Navbar, {}), _jsx("div", { className: 'flex h-[70vh] content-center overflow-hidden', children: _jsxs(MapContainer, { className: 'h-full w-full', center: [-25.4353183, -49.31457], zoom: 12, scrollWheelZoom: true, children: [_jsx(TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), farmers.map((farmer, index) => (_jsx(Marker, { position: [farmer.geocode[0], farmer.geocode[1]], children: _jsx(Popup, { children: farmer.texto }) }, index)))] }) }), _jsx(Footer, {})] }));
};
export default Map;
