import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Figure from 'react-bootstrap/Figure';
import watch from "../assets/watch.png";


import "../assets/style.css";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col id="herocol1">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title>Porto SmartWatch<br></br>
                Pro Edition 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <u>Card Subtitle</u>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          {/* ================================================ */}
          <Col id="herocol2">
            <Figure>
              <Figure.Image
                width={500}
                height={600}
                alt="171x180"
                src={watch}
              />
            </Figure>
          </Col>
        </Row>
      </Container>

      {/* ====================================== */}

      <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 16 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default Home;
