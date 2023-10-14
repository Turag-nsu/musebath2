import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import CustomNavbar from '../src/components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FooterArea from '../src/components/FooterArea/FooterArea';
import ContactUs from './Pages/ContactUs';
import CTA2 from '../src/components/CTA2/CTA2';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <CustomNavbar />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    {/* <CTA2 /> */}
    <FooterArea />
    </div>
  );
}

export default App;