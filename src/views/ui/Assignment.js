import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Assignment = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleId, setScheduleId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [file, setFile] = useState(null);

  // A mock list of schedules with names and IDs
  const scheduleList = [
    { id: '1', name: 'Schedule 1' },
    { id: '2', name: 'Schedule 2' },
    { id: '3', name: 'Schedule 3' },
    // Add more schedules as needed
  ];

  useEffect(() => {
    // Fetch the schedule data from the backend API
    // Update the scheduleList state with the fetched data
    // Example:
    // const fetchSchedules = async () => {
    //   try {
    //     const response = await fetch('/api/schedules');
    //     const data = await response.json();
    //     setScheduleList(data);
    //   } catch (error) {
    //     console.error('Error fetching schedules:', error);
    //   }
    // };
    // fetchSchedules();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const assignmentData = {
      scheduleId,
      name,
      type,
      deadline,
      file
    };
    // Perform form submission logic here with the assignmentData
    console.log(assignmentData);
  };

  const handleScheduleChange = (e) => {
    const selectedSchedule = scheduleList.find((schedule) => schedule.name === e.target.value);
    setScheduleName(e.target.value);
    setScheduleId(selectedSchedule ? selectedSchedule.id : '');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Create Assignment</h2>
              <FormGroup>
                <Label for="scheduleName">Schedule Name</Label>
                <Input
                  type="select"
                  id="scheduleName"
                  value={scheduleName}
                  onChange={handleScheduleChange}
                  required
                >
                  <option value="">Select a schedule</option>
                  {scheduleList.map((schedule) => (
                    <option key={schedule.id} value={schedule.name}>
                      {schedule.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="name">Assignment Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter assignment name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Assignment Type</Label>
                <Input
                  type="text"
                  id="type"
                  placeholder="Enter assignment type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="deadline">Deadline</Label>
                <Input
                  type="date"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="file">File</Label>
                <Input
                  type="file"
                  id="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
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

export default Assignment;
