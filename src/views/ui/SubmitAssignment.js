import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SubmitAssignment= ({ assignmentId }) => {
  const [traineeId, setTraineeId] = useState('');
  const [assignmentFile, setAssignmentFile] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submitAssignmentData = {
      assignmentId,
      traineeId,
      assignmentFile
    };
    // Perform form submission logic here with the submitAssignmentData
    console.log(submitAssignmentData);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Submit Assignment</h2>
              <FormGroup>
                <Label for="traineeId">Trainee ID</Label>
                <Input
                  type="text"
                  id="traineeId"
                  placeholder="Enter trainee ID"
                  value={traineeId}
                  onChange={(e) => setTraineeId(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="assignmentFile">Assignment File</Label>
                <Input
                  type="file"
                  id="assignmentFile"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setAssignmentFile(e.target.files[0])}
                  required
                />
              </FormGroup>

              <Button color="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubmitAssignment;
