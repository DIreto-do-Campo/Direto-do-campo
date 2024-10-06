import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Farm from './pages/Farm';
import VemComAGente from './pages/VemComAGente';
import NotFound from './pages/NotFound';
import Cart from './pages/cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Farm" element={<Farm />} />
        <Route path="/VemComAGente" element={<VemComAGente />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
