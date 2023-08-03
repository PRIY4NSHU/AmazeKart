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
import PrivacyPolicy from './Pages/PrivacyPolicy';
import SingleProduct from './Pages/SingleProduct';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgotpassword from './Pages/ForgotPassword';
import Resetpassword from './Pages/Resetpassword';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

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
           <Route path="policy" element={<PrivacyPolicy/>}/>
           <Route path="product/:id" element={<SingleProduct/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="signup" element={<Signup/>}/>
           <Route path="forgotpassword" element={<Forgotpassword/>}/>
           <Route path="resetpassword/:token" element={<Resetpassword/>}/>
           <Route path="cart" element={<Cart/>}/>
           <Route path="checkout" element={<Checkout/>}/>
           
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
