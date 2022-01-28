import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Agregar from './Agregar';
import TablaDesarrolladores from './TablaDesarrolladores';
import Footer from './Footer';
import Menu from './Menu';
import Editar from './Editar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/desarrolladores" element={<TablaDesarrolladores/>}/>
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
