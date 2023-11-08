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
import BlogSubPage from './Pages/BlogPage/BlogSubpage/BlogSubPage'; import SingleProjectPage from './Pages/ProjectPage/SingleProjectPage/SingleProjectPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import BlogPostArea from './components/AdminComponents/BlogPostArea/BlogPostArea';
import ProjectPostArea from './components/AdminComponents/ProjectPostArea/ProjectPostArea';
import ViewPosts from './components/AdminComponents/ViewPosts/ViewPosts';
import ViewProject from './components/AdminComponents/ViewProject/ViewProject';


import image1 from './Images/Project/1/pic-1.jpeg';
import image2 from './Images/Project/1/pic-2.jpeg';
import image3 from './Images/Project/1/pic-3.jpeg';
import image4 from './Images/Project/1/pic-4.jpeg';
import PageLoading from './components/PageLoading/PageLoading';
import ErrorPage from './components/ErrorPage/ErrorPage';
const projects = {
  images: {
    image1: {
      id: 1,
      img: image1,
    },
    image2: {
      id: 2,
      img: image2,
    },
    image3: {
      id: 3,
      img: image3,
    },
    image4: {
      id: 4,
      img: image4,
    },
  },
  title: "Elegant 3-Bedroom Family Home",
  subtitle: "123 Main Street, Central New Jersey",
  description: [
    {
      id: 1,

      text: "When it comes to remodeling a 3-bedroom house bathroom, the choices made for the fixtures and design can greatly impact the overall aesthetic and functionality of the space. In this particular case, the homeowners have opted for a bathtub in the hallway bath and a shower in the master bath. Additionally, they have expressed their preference for green tiles in the master bath."
    },
    {
      id: 2,

      title: "Elegant 3-Bedroom Family Home",
      subtitle: "123 Main Street, Central New Jersey",
      text: "The decision to choose a bathtub for the hallway bath suggests that the homeowners value relaxation and comfort. A bathtub provides an opportunity to unwind after a long day and create a spa-like experience within the confines of their own home. This choice also caters to any potential future guests who may utilize this bathroom."
    },
    {
      id: 3,

      title: "Elegant 3-Bedroom Family Home",
      subtitle: "123 Main Street, Central New Jersey",
      text: "On the other hand, selecting a shower for the master bath indicates that practicality and efficiency are key considerations. Showers are often preferred by individuals with busy lifestyles as they offer quick and convenient bathing options. The presence of a shower in this space suggests that functionality was prioritized without compromising on style."
    },
    {
      id: 4,

      title: "Elegant 3-Bedroom Family Home",
      subtitle: "123 Main Street, Central New Jersey",
      text: "In terms of design preferences, green tiles in the master bath indicate an affinity towards nature-inspired elements or an intention to create a calming ambiance. Green is often associated with tranquility, renewal, and harmony - qualities that can enhance one's bathing experience. The use of these tiles can add depth and character to the space while infusing it with a touch of freshness."
    },
    {
      id: 5,

      title: "Elegant 3-Bedroom Family Home",
      subtitle: "123 Main Street, Central New Jersey",
      text: "By carefully considering their choices for fixtures such as bathtubs versus showers and incorporating green tiles into their design scheme, these homeowners have demonstrated their desire for both comfort and style in their bathroom remodeling project."
    }
  ]
}
function App() {
  const admin = {
    details: {
      username: "admin",
      password: "password"
    },
  }
  const user = {
    details: {
      username: "",
      password: ""
    },
    loggedIn: (username, password) => {
      // const checkUser = JSON.parse(localStorage.getItem('user'));
      // console.log(user.details.username, admin.details.username, user.details.password, admin.details.password);
      if (username === admin.details.username && password === admin.details.password) {
        return true;
      }
      return false;
    },
    login: (userName, password) => {
      user.details.username = userName;
      user.details.password = password;
      localStorage.setItem('user', JSON.stringify(user.details));
      console.log(JSON.parse(localStorage.getItem('user')));
    },
    isAdmin: () => {
      // return false
      // return user.details.username === admin.details.username && user.details.password === admin.details.password;
      const checkUser = JSON.parse(localStorage.getItem('user'));
      // console.log(checkUser);
      if (checkUser === null) {
        return false;
      }
      return user.loggedIn(checkUser.username, checkUser.password);
    }
  }
  return (

    <div className="App">
      <BrowserRouter>
        <CustomNavbar />

        <Routes>
          <Route path="/test" element={<PageLoading />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>

          </Route>
          <Route path='blog/:blogID' element={<BlogSubPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<ServicePage />} >
            <Route path=":serviceID" element={<ServicePage />} />
          </Route>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/admin" element={<AdminPage user={user} />} >
            <Route path="" element={<BlogPostArea />} />
            <Route path="blog-post" element={<BlogPostArea />} />
            <Route path="project-post" element={<ProjectPostArea />} />
            <Route path='view-blogs' element={<ViewPosts />} />
            <Route path='view-project' element={<ViewProject />} />
          </Route>
          <Route path="/projects/:projectID" element={<SingleProjectPage project={projects} />} />
          <Route path="/:any" element={<ErrorPage />} />
          {/* <Route path="/admin/blog-post" element={<BlogPostArea />} /> */}
        </Routes>
      </BrowserRouter>
      <FooterArea />
    </div>
  );
}

export default App;