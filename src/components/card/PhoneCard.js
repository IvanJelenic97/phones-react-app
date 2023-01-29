import { Container, Card, Row, Col, Button } from "react-bootstrap";

const mainCard = {
  height: "50%",
  boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
  overflowWrap: "inherit",
};
const mainContainer = {
  fontSize: "18px",
};
const bttnStyle = {
  backgroundColor: "#989C9D",
  border: "none",
};

export const PhoneCard = (props) => {
  return (
    <Container className="flex mt-4" style={mainContainer}>
      <Card className="text-center mb-3 px-2 py-2 " style={mainCard}>
        <Row className="mt-4 mb-4">
          <Col xs={3}>{props.title}</Col>
          <Col xs={3}>{props.releasedOn}</Col>
          <Col xs={3}>{props.color}</Col>
          <Col xs={3}>
            <Button onClick={props.show} className="px-2" style={bttnStyle}>
              Details
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
