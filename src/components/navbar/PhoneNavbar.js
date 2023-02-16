import { Navbar, Container } from "react-bootstrap";

const brandStyle = {
  color: "#989C9D",
};
const navbarContainer = {
  display: "flex",
  justifyContent: "space-between",
};

export const PhoneNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="navbarContainer">
          <Navbar.Brand href="/" style={brandStyle}>
            MobilePhones
          </Navbar.Brand>
          <Navbar.Brand href="Checkout" style={brandStyle}>
            Checkout phones
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
