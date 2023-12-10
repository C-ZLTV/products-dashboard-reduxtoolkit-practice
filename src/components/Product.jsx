import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export function Product({ image, title, price, buttonText, buttonFunction }) {
  return (
    <>
      <Col md={3} xs={8} s={7} style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "18rem" }} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={image}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price} EURO</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button variant="primary" onClick={buttonFunction}>
              {buttonText}
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
