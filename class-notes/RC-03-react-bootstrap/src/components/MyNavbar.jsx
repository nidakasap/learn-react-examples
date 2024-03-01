import {Button,Container, Form,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import logo from "../img/logo.png";

const MyNavbar =()=> {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Team</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">FULL-STACK</NavDropdown.Item>
              <NavDropdown.Item href="#action4">DATA-SCIENCE</NavDropdown.Item>
              <NavDropdown.Item href="#action5">DEVOPS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;


// expand = "lg"; lg ekrandan itibaren hamburger gitsin linkler görünsün