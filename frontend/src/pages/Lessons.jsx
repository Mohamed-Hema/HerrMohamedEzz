import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/SideBar";
import "../Styles/Lessons.module.css"; // You can define your own CSS styles

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axios.get("http://localhost:3100/api/lessons");
        setLessons(res.data);
        setCurrentLesson(res.data[0]); // Set the first lesson as the current lesson
      } catch (err) {
        console.error(err);
      }
    };

    fetchLessons();
  }, []);

  const handleExamLinkClick = () => {
    if (currentLesson.googleFormsLink) {
      setSelectedLink(currentLesson.googleFormsLink);
    } else {
      setSelectedLink("لا يوجد لهذا الدرس");
    }
  };

  const handleMaterialClick = () => {
    if (currentLesson.googleDriveLink) {
      setSelectedLink(currentLesson.googleDriveLink);
    } else {
      setSelectedLink("There is no link");
    }
  };

  if (!currentLesson) return <div>Loading...</div>; // Show a loading message if no lesson is selected

  const videoId = currentLesson.youtubeVideoId; // Replace with your YouTube video ID

  const opts = {
    height: "390",
    width: "100%", // Make the video span full width
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={9} className="content-container">
          <div className="video-container">
            <YouTube videoId={videoId} opts={opts} />
            <div className="buttons-container">
              <Button
                variant="secondary"
                onClick={handleExamLinkClick}
                className="button-margin"
              >
                لينك الامتحان
              </Button>
              <Button
                variant="secondary"
                onClick={handleMaterialClick}
                className="button-margin"
              >
                تحميل المحتوي
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  const updatedLesson = {
                    ...currentLesson,
                    isFinished: !currentLesson.isFinished,
                  };
                  axios
                    .put(
                      `http://localhost:3100/api/lessons/${currentLesson._id}`,
                      updatedLesson
                    )
                    .then(() => setCurrentLesson(updatedLesson))
                    .catch(console.error);
                }}
                className="button-margin"
              >
                <Form.Check
                  type="checkbox"
                  checked={currentLesson.isFinished}
                  onChange={() => {}}
                />
                قمت بمشاهدة الدرس
              </Button>
            </div>
            {selectedLink && (
              <Card style={{ marginTop: "10px", backgroundColor: "#F5F5DC" }}>
                <Card.Body>
                  {selectedLink.startsWith("http") ? (
                    <a
                      href={selectedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedLink}
                    </a>
                  ) : (
                    selectedLink
                  )}
                </Card.Body>
              </Card>
            )}
          </div>
        </Col>
        <Col sm={12} md={3} className="sidebar-container">
          <Sidebar
            onSelectLesson={(lesson) => {
              setCurrentLesson(lesson);
              setSelectedLink(null);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Lessons;
