import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Farm from './pages/Farm';
import VemComAGente from './pages/VemComAGente';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Map from './pages/Map';
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Farm" element={<Farm />} />
        <Route path="/VemComAGente" element={<VemComAGente />} />
        <Route path="/explore" element={<Map />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/About' element={<About />} />
        {/* Página de erro 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
