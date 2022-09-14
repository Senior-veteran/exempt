import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Korsina from './pages/Korsina';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/korsina' element={<Korsina/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
