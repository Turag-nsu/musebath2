import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import logo from '../../Images/musebath-logo.svg';

const CustomNavbar = () => {
  const [selected, setSelected] = useState(null);
  const scrollToSection = (sectionId) => {
    setSelected(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ block:"center", behavior: 'smooth' });
    }
  };
  const checkServiceClick = () => {
    if (selected === 'services') {
      scrollToSection('services');
      setSelected(null);
    }
  };
  React.useEffect(() => {
    checkServiceClick();
    
  }, []);

  
  const handleLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.click();
  };

  return (
    
    <Navbar collapseOnSelect expand="md" className="customnav fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Muse Bath" className="musebath-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="collapse" data-target="#responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto navlinks">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/" onClick={() => {handleLinkClick(); scrollToSection('services')}}>Services</Link>
            <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
            <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          </Nav>
          <Link to="/contact-us">
          <CustomButton 
            text="Contact Us" 
          />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default CustomNavbar;
