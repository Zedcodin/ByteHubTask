import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { colors } from '../constants/colors';

function NavbarComponent() {
  return (
    <Navbar style={{backgroundColor:colors.primary}} expand="lg" className="NavBarComponent  text-light container-fluid ">
      <Container>
        <Navbar.Brand className='text-light fs-2 fw-bold' href="#home">
        Ripo<span style={{color:colors.colorsecondary}}>Finder.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mx-auto gap-5  w-100 d-flex align-items-center justify-content-end  ">
            <Nav.Link id='header_item' className='text-light header_item' href="#home">Home</Nav.Link>
            <Nav.Link id='header_item' className='text-light header_item' href="#link">About</Nav.Link>
            <Nav.Link id='header_item' className='text-light header_item' href="#link">Contact</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;