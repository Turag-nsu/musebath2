import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage/BlogPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import CustomNavbar from '../src/components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FooterArea from '../src/components/FooterArea/FooterArea';
import ContactUs from './Pages/ContactUs';
import CTA2 from '../src/components/CTA2/CTA2';
import data from './Database/Data'
import MyMap from './components/MyMap/MyMap';
import BlogSubPage from './Pages/BlogPage/BlogSubpage/BlogSubPage';import SingleProjectPage from './Pages/ProjectPage/SingleProjectPage/SingleProjectPage';
const projects = {
  description: [
      {
          id: 1,
          text: "When it comes to remodeling a 3-bedroom house bathroom, the choices made for the fixtures and design can greatly impact the overall aesthetic and functionality of the space. In this particular case, the homeowners have opted for a bathtub in the hallway bath and a shower in the master bath. Additionally, they have expressed their preference for green tiles in the master bath."
      },
      {
          id: 2,
          text: "The decision to choose a bathtub for the hallway bath suggests that the homeowners value relaxation and comfort. A bathtub provides an opportunity to unwind after a long day and create a spa-like experience within the confines of their own home. This choice also caters to any potential future guests who may utilize this bathroom."
      },
      {
          id: 3,
          text: "On the other hand, selecting a shower for the master bath indicates that practicality and efficiency are key considerations. Showers are often preferred by individuals with busy lifestyles as they offer quick and convenient bathing options. The presence of a shower in this space suggests that functionality was prioritized without compromising on style."
      },
      {
          id: 4,
          text: "In terms of design preferences, green tiles in the master bath indicate an affinity towards nature-inspired elements or an intention to create a calming ambiance. Green is often associated with tranquility, renewal, and harmony - qualities that can enhance one's bathing experience. The use of these tiles can add depth and character to the space while infusing it with a touch of freshness."
      },
      {
          id: 5,
          text: "By carefully considering their choices for fixtures such as bathtubs versus showers and incorporating green tiles into their design scheme, these homeowners have demonstrated their desire for both comfort and style in their bathroom remodeling project."
      }
  ]
}
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
          
          <Route path="/projects/:projectID" element={<SingleProjectPage project={projects}/> } />
        </Routes>
      </BrowserRouter>
      <FooterArea />
    </div>
  );
}

export default App;