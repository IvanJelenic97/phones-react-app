import { Container, Card, Row, Col } from "react-bootstrap";

const firstCard = {
  fontWeight: "bold",
  fontSize: "22px",
  border: "none",
  backgroundColor: "#989C9D",
};

const colStyle = {
  color: "#DDDDDD",
};

export const TitleContainer = () => {
  return (
    <Container className="flex mt-4 text-center mb-3 px-2 py-2">
      <Card className="text-center mb-3 px-2 py-2" style={firstCard}>
        <Row className="mt-4 mb-4">
          <Col style={colStyle}>Phone</Col>
          <Col style={colStyle}>Year</Col>
          <Col style={colStyle}>Color</Col>
          <Col></Col>
        </Row>
      </Card>
    </Container>
  );
};
