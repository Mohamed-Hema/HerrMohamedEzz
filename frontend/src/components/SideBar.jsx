import React from "react";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  const lessons = [
    { id: 1, title: "Lesson 1" },
    { id: 2, title: "Lesson 2" },
    { id: 3, title: "Lesson 3" },
    { id: 4, title: "Lesson 4" },
  ];

  return (
    <Nav className="flex-column">
      {lessons.map((lesson) => (
        <Nav.Link key={lesson.id} href={`#lesson${lesson.id}`}>
          {lesson.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
