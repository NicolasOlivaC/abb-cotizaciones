import React from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from './components/ui/navBar';
import Form from './components/ui/form';
import MenuSelect from './components/ui/menuSelect'
import PmCotizacion from './components/view/pmCotizacion'
import TablePrelCot from './components/ui/tablePrelCot'


function App() {
  console.log("rendericé app")

  return (
    <div className="contenedor" >
      <Navbar />

      <Routes>
        <Route index exact path="/" element={<MenuSelect />} />
        <Route exact path="/cotizacion" element={<Form />} />
        <Route exact path="/handlePM" element={<TablePrelCot />} />
        <Route exact path="/handlePM/:ID" element={<PmCotizacion />} />
        <Route path="*" element={<h1>La pagina solicitada no existe</h1>} />
      </Routes>


      {/* <Form /> */}


    </div>
  );
}

export default App;
