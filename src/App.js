import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage/BlogPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';
import CustomNavbar from '../src/components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FooterArea from '../src/components/FooterArea/FooterArea';
import ContactUs from './Pages/ContactUs';
import CTA2 from '../src/components/CTA2/CTA2';
import data from './Database/Data'
import MyMap from './components/MyMap/MyMap';
import BlogSubPage from './Pages/BlogSubpage/BlogSubPage';
function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <CustomNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
           
          </Route>
          <Route path='blog/:blogID' element={<BlogSubPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<ServicePage />} >
            <Route path=":serviceID" element={<ServicePage />} />
          </Route>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/map" element={<MyMap />} />
        </Routes>
      </BrowserRouter>
      <FooterArea />
    </div>
  );
}

export default App;