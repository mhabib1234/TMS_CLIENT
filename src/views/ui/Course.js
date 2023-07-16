import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Course = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTrainerId, setAssignedTrainerId] = useState(null);
  const [trainerName, setTrainerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      name,
      type,
      description,
      assignedTrainerId,
      trainerName,
      startDate,
      endDate
    };
    // Perform form submission logic here with the courseData
    console.log(courseData);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Create Course</h2>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter course name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  type="text"
                  id="type"
                  placeholder="Enter course type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  id="description"
                  placeholder="Enter course description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="assignedTrainerId">Assigned Trainer ID</Label>
                <Input
                  type="number"
                  id="assignedTrainerId"
                  placeholder="Enter assigned trainer ID"
                  value={assignedTrainerId}
                  onChange={(e) => setAssignedTrainerId(parseInt(e.target.value))}
                />
              </FormGroup>

              <FormGroup>
                <Label for="trainerName">Trainer Name</Label>
                <Input
                  type="text"
                  id="trainerName"
                  placeholder="Enter trainer name"
                  value={trainerName}
                  onChange={(e) => setTrainerName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormGroup>

              <Button color="primary" type="submit" block>
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
