import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';
import CustomButton from '../CustomButton/CustomButton';
// import CustomButton from '../CustomButton/CustomButton';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="customnav">
      <Container>
        <Navbar.Brand href="#home" className="logo my-auto">Muse bath</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navlinks">
            <a href="#home">Design</a>
            <a href="#link">Service</a>
            <a href="#home">Process</a>
            <a href="#link">About</a>
            <a href="#home">Career</a>
          </Nav>
          <CustomButton text="Free consultation" />
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
