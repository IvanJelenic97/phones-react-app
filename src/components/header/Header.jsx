import { Card } from "react-bootstrap";

const cardTitle = {
  color: "#989C9D",
  fontSize: "42px",
};

export const Header = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        style={{ height: 200 }}
        src="https://png.pngtree.com/thumb_back/fh260/background/20200814/pngtree-abstract-gold-light-line-slash-on-dark-grey-blank-space-design-image_391887.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title style={cardTitle} className="text-center mt-5">
          Mobile Phones
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};
