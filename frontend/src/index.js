import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowerRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './landing-page/home/HomePage';
import SignUp from './landing-page/pages/SignUp';

import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/ProductPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';

import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from "./landing-page/NotFound";
import Login from './landing-page/pages/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


