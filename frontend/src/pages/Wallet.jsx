import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CashBack from "../components/CashBack";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const websiteUrl = "https://herrmohamedezz.com";

  const handleWithdraw = () => {
    if (balance > 0) {
      setBalance(0);
    }
  };

  return (
    <>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ width: "full", height: "400px", marginBottom: "50px" }}
        >
          <Card>
            <Card.Header>Wallet</Card.Header>
            <Card.Body>
              <Card.Text style={{ marginTop: "40px" }}>
                Balance: {balance} EGP
              </Card.Text>
              <Button variant="primary" onClick={handleWithdraw}>
                Withdraw
              </Button>
            </Card.Body>
          </Card>

          <Row>
            <h1>
              <span>💵</span>
              شير مع اصحابك عشان تاخد الكاش باك
              <span>💵</span>
            </h1>
            <Col>
              <FacebookShareButton url={websiteUrl}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ fontSize: "32px", color: "#3b5998" }}
                />
              </FacebookShareButton>
            </Col>
            <Col>
              {" "}
              <WhatsappShareButton url={websiteUrl}>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "32px", color: "#25D366" }}
                />
              </WhatsappShareButton>
            </Col>
            <Col>
              <TelegramShareButton url={websiteUrl}>
                <FontAwesomeIcon
                  icon={faTelegram}
                  style={{ fontSize: "32px", color: "#0088cc" }}
                />
              </TelegramShareButton>
            </Col>
          </Row>
        </Row>
      </Container>
      <CashBack />
    </>
  );
};

export default Wallet;
