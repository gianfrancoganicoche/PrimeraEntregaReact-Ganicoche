import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary opacity-75">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Hacete socio" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ver locales</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Ver precios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pase libre
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Trabaja con nosotros
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Qué estás buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;