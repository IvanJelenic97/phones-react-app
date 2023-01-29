import { Navbar, Nav, Container, Button } from "react-bootstrap";

const brandStyle = {
  color: "#989C9D",
};

export const PhoneNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={brandStyle}>
            MobilePhones
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
