import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

const Sidebar = ({ onSelectLesson }) => {
  const [lessons, setLessons] = useState([]);

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

  return (
    <div>
      {lessons.map((lesson) => (
        <Card
          key={lesson._id}
          style={{ marginBottom: "10px", cursor: "pointer" }}
          onClick={() => onSelectLesson(lesson)}
        >
          <Card.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "10px" }}>
                <img
                  src={`https://img.youtube.com/vi/${lesson.youtubeVideoId}/0.jpg`}
                  alt={`Thumbnail for ${lesson.lessonName}`}
                  style={{ width: "100px", height: "75px" }}
                />
              </div>
              <div>
                <Nav.Link>{lesson.lessonName}</Nav.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Sidebar;
