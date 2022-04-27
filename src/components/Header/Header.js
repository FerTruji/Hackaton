import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand href="/">IN_Blockchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className=" ml-5">
            <Nav.Link href="#features">INformacion</Nav.Link>
            <Nav.Link href="#features">INnovacion</Nav.Link>
            <Nav.Link href="#features">INversion</Nav.Link>
            <Nav.Link href="/homePage">INgresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default Header;
