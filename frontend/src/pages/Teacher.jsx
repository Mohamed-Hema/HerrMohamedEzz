import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Teacher = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonName, setLessonName] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [googleDriveLink, setGoogleDriveLink] = useState("");
  const [googleFormsLink, setGoogleFormsLink] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axios.get("http://localhost:3100/api/lessons");
        setLessons(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLessons();
  }, []);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setLessonName(lesson.lessonName);
    setYoutubeVideoId(lesson.youtubeVideoId);
    setGoogleDriveLink(lesson.googleDriveLink);
    setGoogleFormsLink(lesson.googleFormsLink);
    setCategory(lesson.category);
  };

  const handleSaveClick = async () => {
    if (selectedLesson) {
      // Update the selected lesson
      const updatedLesson = {
        ...selectedLesson,
        lessonName,
        youtubeVideoId,
        googleDriveLink,
        googleFormsLink,
        category,
      };
      try {
        await axios.put(
          `http://localhost:3100/api/lessons/${selectedLesson._id}`,
          updatedLesson
        );
        // Update the lesson in the state
        setLessons(
          lessons.map((lesson) =>
            lesson._id === selectedLesson._id ? updatedLesson : lesson
          )
        );
        setSelectedLesson(updatedLesson);
      } catch (err) {
        console.error(err);
      }
    } else {
      // Create a new lesson
      const newLesson = {
        lessonName,
        youtubeVideoId,
        googleDriveLink,
        googleFormsLink,
        category,
      };
      try {
        const res = await axios.post(
          "http://localhost:3100/api/addlesson",
          newLesson
        );
        // Add the new lesson to the state
        setLessons([...lessons, res.data]);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDeleteClick = async () => {
    if (selectedLesson) {
      try {
        await axios.delete(
          `http://localhost:3100/api/lessons/${selectedLesson._id}`
        );
        // Remove the deleted lesson from the state
        setLessons(
          lessons.filter((lesson) => lesson._id !== selectedLesson._id)
        );
        setSelectedLesson(null);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={3}>
          <Button onClick={() => setSelectedLesson(null)}>New Lesson</Button>
          {lessons.map((lesson) => (
            <div
              key={lesson._id}
              onClick={() => handleLessonClick(lesson)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedLesson === lesson ? "red" : "transparent",
                color: selectedLesson === lesson ? "white" : "black",
              }}
            >
              {lesson.lessonName}
            </div>
          ))}
        </Col>
        <Col sm={12} md={9}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Lesson Name</Form.Label>
              <Form.Control
                type="text"
                value={lessonName}
                onChange={(e) => setLessonName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>YouTube Video ID</Form.Label>
              <Form.Control
                type="text"
                value={youtubeVideoId}
                onChange={(e) => setYoutubeVideoId(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Google Drive Link</Form.Label>
              <Form.Control
                type="text"
                value={googleDriveLink}
                onChange={(e) => setGoogleDriveLink(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Google Forms Link</Form.Label>
              <Form.Control
                type="text"
                value={googleFormsLink}
                onChange={(e) => setGoogleFormsLink(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="1st secondary">1st secondary</option>
                <option value="2nd secondary">2nd secondary</option>
                <option value="3rd secondary">3rd secondary</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={handleSaveClick}>
              Save
            </Button>
            {selectedLesson && (
              <Button
                variant="danger"
                onClick={handleDeleteClick}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Teacher;
