import React from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css';

import ImageFrame from './components/ui/imageFrame';
import Navbar from './components/ui/navBar';
import Form from './components/ui/form';
import MenuSelect from './components/ui/menuSelect'
import Demo from './components/ui/demo'
import Pm from './components/view/pm'


function App() {
  console.log("rendericé app")



  return (
    <div className="contenedor" >
      <Navbar />

      <div className="contenedor2">
        <h2 className="tittle">Cotizador de motores ABB</h2>
        <ImageFrame />

        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </div>

      </div>

      <Routes>
        <Routes>
          <Route exact path="/" element={<MenuSelect />} />
          <Route exact path="/cotizacion" element={<Form />} />
          <Route exact path="/demo" element={<Demo />}>
            <Route path=":demoID" element={<Demo/>} />
          </Route>
          <Route exact path="/pm" element={<Pm />} />
          <Route path="*"/>
        </Routes>
      </Routes>

      {/* <Form /> */}


    </div>
  );
}

export default App;
