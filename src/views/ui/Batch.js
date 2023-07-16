import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Batch = () => {
  const [batchName, setBatchName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfTrainee, setNumberOfTrainee] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const batchData = {
      batchName,
      startDate,
      endDate,
      numberOfTrainee
    };
    // Perform form submission logic here with the batchData
    console.log(batchData);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Create Batch</h2>
              <FormGroup>
                <Label for="batchName">Batch Name</Label>
                <Input
                  type="text"
                  id="batchName"
                  placeholder="Enter batch name"
                  value={batchName}
                  onChange={(e) => setBatchName(e.target.value)}
                  required
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

              <FormGroup>
                <Label for="numberOfTrainee">Number of Trainees</Label>
                <Input
                  type="number"
                  id="numberOfTrainee"
                  placeholder="Enter number of trainees"
                  value={numberOfTrainee}
                  onChange={(e) => setNumberOfTrainee(parseInt(e.target.value))}
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

export default Batch;
