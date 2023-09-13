import "../Styles/Dashboard.module.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <CardComponent
            image="/public/assets/thirdSecondary.jpg"
            title="الصف الثالث الثانوي"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            link="#"
            href="/thirdsecondary"
          />
        </Col>
        <Col md="4">
          <CardComponent
            image="/public/assets/secondSecondary.jpg"
            title="الصف الثاني الثانوي"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="/secondsecondary"
          />
        </Col>
        <Col md="4">
          <CardComponent
            image="/public/assets/firstSecondary.jpg"
            title="الصف الأول الثانوي"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="/firstsecondary"
          />
        </Col>
      </Row>
    </Container>
  );
};

const CardComponent = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "100%", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <a className="btn btn-primary" href={props.href}>
          عرض الدروس
        </a>
      </Card.Body>
    </Card>
  );
};

export default Dashboard;
