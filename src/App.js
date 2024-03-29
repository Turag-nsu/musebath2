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
import TestArea from './components/TestArea/TestArea';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutusPage from './Pages/AboutusPage';
import { Helmet } from 'react-helmet';

function App() {
  
  const user = {
    details: {
      username: "",
      password: "",
    },
    loggedIn: (username, password) => {
 if (username === process.env.REACT_APP_ADMIN && password === process.env.REACT_APP_PASSWORD) {
        return true;
      }
      return false;
    },
    login: (userName, password) => {
      user.details.username = userName;
      user.details.password = password;
      localStorage.setItem('user', JSON.stringify(user.details));
    },
    isAdmin: () => {

      const checkUser = JSON.parse(localStorage.getItem('user'));
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

        <Routes >
          <Route path="/test" element={<TestArea />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>

          </Route>
          <Route path='blog/:blogLink' element={<BlogSubPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutusPage />} />
          <Route path="/services" element={<ServicePage />} >
            <Route path=":serviceTitle" element={<ServicePage />} />
          </Route>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/admin" element={<AdminPage user={user} />} >
            <Route path="" element={<BlogPostArea />} />
            <Route path="blog-post" element={<BlogPostArea />} />
            <Route path="project-post" element={<ProjectPostArea />} />
            <Route path='view-blogs' element={<ViewPosts />} />
            <Route path='view-project' element={<ViewProject />} />
          </Route>
          <Route path="/projects/:projectLink" element={<SingleProjectPage />} />
          <Route path="/:any" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <FooterArea />
    </div>
  );
}

export default App;