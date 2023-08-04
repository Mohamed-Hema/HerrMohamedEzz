import React, { useState } from "react";
import YouTube from "react-youtube";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Sidebar from "./Sidebar";
// import "./VideoPlayer.css";

const Lessons = () => {
  const [isVideoCompleted, setVideoCompleted] = useState(false);

  const handleVideoCompleteChange = () => {
    setVideoCompleted(!isVideoCompleted);
  };

  const handleExamLinkClick = () => {
    // Handle click event for exam link button
  };

  const handleMaterialClick = () => {
    // Handle click event for material button
  };

  const videoId = "your-youtube-video-id"; // Replace with your YouTube video ID

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>{/* <Sidebar /> */}</Col>
        <Col sm={9}>
          <div className="video-container">
            <YouTube videoId={videoId} opts={opts} />
            <div className="buttons-container">
              <Button
                variant="primary"
                onClick={handleVideoCompleteChange}
                className="button-margin"
              >
                <Form.Check
                  type="checkbox"
                  label="Video Completed"
                  checked={isVideoCompleted}
                  onChange={handleVideoCompleteChange}
                />
              </Button>
              <Button
                variant="secondary"
                onClick={handleExamLinkClick}
                className="button-margin"
              >
                Exam Link
              </Button>
              <Button
                variant="secondary"
                onClick={handleMaterialClick}
                className="button-margin"
              >
                Material
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Lessons;
