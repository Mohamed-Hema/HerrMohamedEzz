import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card className="dashboard-card">
            <Card.Img
              variant="top"
              src="image1.jpg" // Replace with your image URL or import the image
            />
            <Card.Body>
              <Card.Title>1 Secondary</Card.Title>
              <Button variant="primary" className="card-button">
                Show Lessons
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="dashboard-card">
            <Card.Img
              variant="top"
              src="image2.jpg" // Replace with your image URL or import the image
            />
            <Card.Body>
              <Card.Title>2 Secondary</Card.Title>
              <Button variant="primary" className="card-button">
                Show Lessons
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="dashboard-card">
            <Card.Img
              variant="top"
              src="image3.jpg" // Replace with your image URL or import the image
            />
            <Card.Body>
              <Card.Title>3 Secondary</Card.Title>
              <Button variant="primary" className="card-button">
                Show Lessons
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
