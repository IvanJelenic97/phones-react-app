import { Container, Card, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import titleStore from "../../store/titleStore";

const firstCard = {
  fontWeight: "bold",
  fontSize: "22px",
  border: "none",
  backgroundColor: "#989C9D",
};

const colStyle = {
  color: "#DDDDDD",
};

const TitleContainer = observer(() => {
  const handleTitleClick = () => {
    console.log("Title clicked");
  };

  return (
    <Container className="flex mt-4 text-center mb-3 px-2 py-2">
      <Card className="text-center mb-3 px-2 py-2" style={firstCard}>
        <Card onClick={handleTitleClick}>
          <Row className="mt-4 mb-4">
            <Col style={colStyle}>Title</Col>
            <Col style={colStyle}>Year</Col>
            <Col style={colStyle}>Color</Col>
            <Col></Col>
          </Row>
        </Card>
      </Card>
    </Container>
  );
});

export default TitleContainer;
