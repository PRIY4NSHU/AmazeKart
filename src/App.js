import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Layout from './Components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Compare from './Pages/Compare';
import Wishlist from './Pages/Wishlist';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout />}>
           <Route index element= {<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="store" element={<OurStore />} />
           <Route path="compare" element={<Compare />} />
           <Route path="wishlist" element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
