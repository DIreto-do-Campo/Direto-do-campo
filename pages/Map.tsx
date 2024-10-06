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

    return (
        <div className="max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col">
            <Navbar />
            <div className='flex h-[70vh] content-center overflow-hidden'>
                <MapContainer className='h-full w-full' center={[-25.4353183,-49.31457]} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {farmers.map((farmer, index) => (
                        <Marker key={index} position={farmer.geocode}>
                            <Popup>
                                {farmer.texto}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <Footer />
        </div>
    );
};

export default Map;
