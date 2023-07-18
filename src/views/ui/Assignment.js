import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAssignment = () => {
  const [formData, setFormData] = useState({
    scheduleId: '',
    name: '',
    type: '',
    deadline: '',
    file: null,
  });
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:9080/schedule-batch');
      const schedules = response.data.Schedules.map((schedule) => ({
        id: schedule.id,
        name: schedule.name,
      }));
      setScheduleList(schedules);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('scheduleId', formData.scheduleId);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('deadline', formData.deadline);
      formDataToSend.append('file', formData.file);

      const response = await axios.post('http://localhost:9080/assignment', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data);

      setFormData({
        scheduleId: '',
        name: '',
        type: '',
        deadline: '',
        file: null,
      });
    } catch (error) {
      toast.error('Error creating assignment');
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Create Assignment</h2>
              <FormGroup>
                <Label for="scheduleId">Schedule Name</Label>
                <Input
                  type="select"
                  id="scheduleId"
                  name="scheduleId"
                  value={formData.scheduleId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a schedule</option>
                  {scheduleList.map((schedule) => (
                    <option key={schedule.id} value={schedule.id}>
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  type="select"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a type</option>
                  <option value="Daily Task">Daily Task</option>
                  <option value="Assignment">Assignment</option>
                  <option value="Mini Project">Mid Term Mini Project</option>
                  <option value="Final Project">Final Project</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="deadline">Deadline</Label>
                <Input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="file">File</Label>
                <Input type="file" id="file" name="file" onChange={handleFileChange} required />
              </FormGroup>

              <Button color="primary" type="submit" block>
                Create Assignment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default CreateAssignment;
