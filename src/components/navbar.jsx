import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "./navbar.css";

const Mainnavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/service"> Service </Link>
            <Link to="/contact"> Contact </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Mainnavbar;
