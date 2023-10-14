import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';
import CustomButton from '../CustomButton/CustomButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CustomNavbar = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Navbar expand="lg" className="customnav fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="logo my-auto">Muse bath</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navlinks">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            {/* <a href="#home">Career</a> */}
          </Nav>

          <Link to="/contact-us">
            <CustomButton text="Contact Us" />
          </Link>

          {/* <CustomButton text="Contact Us" /> */}
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
