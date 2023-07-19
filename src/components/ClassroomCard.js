import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ClassroomCard = ({ classrooms }) => {
  return (
    <Row>
      {classrooms.map((classroom) => (
        <Col key={classroom.id} md={4} className="mb-4">
          <Card>
            <CardImg top src={classroom.image} alt={classroom.name} />
            <CardBody>
              <CardTitle tag="h5">{classroom.name}</CardTitle>
              <Link to={`/trainer/classroom/${classroom.name}`}>
                <Button color="primary">Enter Classroom</Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClassroomCard;
