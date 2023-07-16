import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AssignTraineeToBatchForm = () => {
  const [batchId, setBatchId] = useState('');
  const [traineeList, setTraineeList] = useState([]);
  const [selectedTrainees, setSelectedTrainees] = useState([]);

  // A mock list of batches with names and IDs
  const batchList = [
    { id: '1', name: 'Batch 1' },
    { id: '2', name: 'Batch 2' },
    { id: '3', name: 'Batch 3' },
    // Add more batches as needed
  ];

  // A mock list of trainees
  const mockTraineeList = [
    { id: '1', name: 'Trainee 1' },
    { id: '2', name: 'Trainee 2' },
    { id: '3', name: 'Trainee 3' },
    // Add more trainees as needed
  ];

  useEffect(() => {
    // Fetch the trainee data from the backend API
    // Update the traineeList state with the fetched data
    // Example:
    // const fetchTrainees = async () => {
    //   try {
    //     const response = await fetch('/api/trainees');
    //     const data = await response.json();
    //     setTraineeList(data);
    //   } catch (error) {
    //     console.error('Error fetching trainees:', error);
    //   }
    // };
    // fetchTrainees();
    setTraineeList(mockTraineeList); // For demonstration purposes using mock data
  }, []);

  const handleBatchChange = (e) => {
    const selectedBatchId = e.target.value;
    setBatchId(selectedBatchId);
  };

  const handleTraineeCheckboxChange = (traineeId) => {
    const isSelected = selectedTrainees.includes(traineeId);
    if (isSelected) {
      setSelectedTrainees(selectedTrainees.filter((id) => id !== traineeId));
    } else {
      setSelectedTrainees([...selectedTrainees, traineeId]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here with the batchId and selectedTrainees
    console.log('Batch ID:', batchId);
    console.log('Selected Trainees:', selectedTrainees);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', marginBottom: '150px' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Assign Trainees to Batch</h2>
              <FormGroup>
                <Label for="batch">Batch</Label>
                <Input
                  type="select"
                  id="batch"
                  value={batchId}
                  onChange={handleBatchChange}
                  required
                >
                  <option value="">Select a batch</option>
                  {batchList.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="traineeList">Trainee List</Label>
                <div id="traineeList">
                  {traineeList.map((trainee) => (
                    <div key={trainee.id}>
                      <input
                        type="checkbox"
                        id={`trainee-${trainee.id}`}
                        value={trainee.id}
                        checked={selectedTrainees.includes(trainee.id)}
                        onChange={() => handleTraineeCheckboxChange(trainee.id)}
                      />
                      <label htmlFor={`trainee-${trainee.id}`}>{trainee.name}</label>
                    </div>
                  ))}
                </div>
              </FormGroup>

              <Button color="primary" type="submit" block>
                Assign Trainees
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssignTraineeToBatchForm;
