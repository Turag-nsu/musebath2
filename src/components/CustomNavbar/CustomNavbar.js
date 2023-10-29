import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';
import CustomButton from '../CustomButton/CustomButton';
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigator = useNavigate()
  const [selected, setSelected] = useState(null);
  const handelContactUsClick = () => {
    console.log('clicked');
    navigator('/contact-us')
  }
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ block:"center", behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="customnav fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="logo my-auto">Muse bath</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navlinks">
            <Link to="/" onClick={() => scrollToSection('home')}>Home</Link>
            <Link to="/" onClick={() => scrollToSection('services')}>Services</Link>
            <Link to="/projects" onClick={() => scrollToSection('projects')}>Projects</Link>
            <Link to="/blog" onClick={() => scrollToSection('blog')}>Blog</Link>
          </Nav>

          <Link to="/contact-us">
          <CustomButton 
            // onClick={handelContactUsClick}
            text="Contact Us" 
          />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
