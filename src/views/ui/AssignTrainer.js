import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AssignTrainer = () => {
  const [batchId, setBatchId] = useState('');
  const [batchList, setBatchList] = useState([]);
  const [trainerList, setTrainerList] = useState([]);
  const [selectedTrainers, setSelectedTrainers] = useState([]);

  // A mock list of batches with names and IDs
  const mockBatchList = [
    { id: '1', name: 'Batch 1' },
    { id: '2', name: 'Batch 2' },
    { id: '3', name: 'Batch 3' },
    // Add more batches as needed
  ];

  // A mock list of trainers
  const mockTrainerList = [
    { id: '1', name: 'Trainer 1' },
    { id: '2', name: 'Trainer 2' },
    { id: '3', name: 'Trainer 3' },
    // Add more trainers as needed
  ];

  /*
  useEffect(() => {
    // Fetch the batch data from the backend API
    const fetchBatches = async () => {
      try {
        const response = await fetch('/api/batches');
        const data = await response.json();
        setBatchList(data);
      } catch (error) {
        console.error('Error fetching batches:', error);
      }
    };
    fetchBatches();

    // Fetch the trainer data from the backend API
    const fetchTrainers = async () => {
      try {
        const response = await fetch('/api/trainers');
        const data = await response.json();
        setTrainerList(data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);
  */

  const handleBatchChange = (e) => {
    const selectedBatchId = e.target.value;
    setBatchId(selectedBatchId);
  };

  const handleTrainerCheckboxChange = (trainerId) => {
    const isSelected = selectedTrainers.includes(trainerId);
    if (isSelected) {
      setSelectedTrainers(selectedTrainers.filter((id) => id !== trainerId));
    } else {
      setSelectedTrainers([...selectedTrainers, trainerId]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here with the batchId and selectedTrainers
    console.log('Batch ID:', batchId);
    console.log('Selected Trainers:', selectedTrainers);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', marginBottom: '150px' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Assign Trainers to Batch</h2>
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
                  {mockBatchList.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="trainerList">Trainer List</Label>
                <div id="trainerList">
                  {mockTrainerList.map((trainer) => (
                    <div key={trainer.id}>
                      <input
                        type="checkbox"
                        id={`trainer-${trainer.id}`}
                        value={trainer.id}
                        checked={selectedTrainers.includes(trainer.id)}
                        onChange={() => handleTrainerCheckboxChange(trainer.id)}
                      />
                      <label htmlFor={`trainer-${trainer.id}`}>{trainer.name}</label>
                    </div>
                  ))}
                </div>
              </FormGroup>

              <Button color="primary" type="submit" block>
                Assign Trainers
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssignTrainer;
