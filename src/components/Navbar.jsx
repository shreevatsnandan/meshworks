import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarhead() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '180px' }}
              navbarScroll
            >
              <Nav.Link className="mx-3"href="#action1">Manifesto</Nav.Link>
              <NavDropdown className="mx-3" title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">More1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  More2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-3" href="#action2">Customers</Nav.Link>
              <Nav.Link className="mx-3" href="#action6">Pricing</Nav.Link>
             
            <NavDropdown className="mx-3" title="Resources" id="navbarScrollingDropdown1">
                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Partnership
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  What's New
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="outline-primary text-black" className="border-0">
                Login
              </Button>
              <Button className="gradient-btn border-0">
                Book a Demo
              </Button>
            </div>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarhead;
