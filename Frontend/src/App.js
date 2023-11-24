import './App.css';

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Noticias from './pages/noticias'
import Parceiros from './pages/parceiros'
import Contato from './pages/contato'
import ContatoParceria from './Contato_Parceria';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Sobre" element={<Sobre />} />
      <Route path="Noticias" element={<Noticias />} />
      <Route path="Parceiros" element={<Parceiros />} />
      <Route path="Contato" element={<Contato />} />
      <Route path="SejaParceiro" element={<ContatoParceria />} />
    </Routes>
  );
}

export default App;
