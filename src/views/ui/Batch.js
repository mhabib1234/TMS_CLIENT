import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Batch = () => {
  const [batchData, setBatchData] = useState({
    batchName: '',
    startDate: '',
    endDate: '',
    numberOfTrainee: 0,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9080/batch", batchData, {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log(response.data);
      if (response.status === 201) {
        // Display success toast notification
        toast.success("Batch created successfully!", { autoClose: 3000 });
        // Clear form fields
        setBatchData({
          batchName: '',
          startDate: '',
          endDate: '',
          numberOfTrainee: 0,
        });
      } else {
        const errorMessage = response.data || "Batch creation failed. Please try again.";
        toast.error(errorMessage, { autoClose: 3000 });
      }
    } catch (error) {
      // Display error toast notification
     // console.log(response.data);
      toast.error("Error creating batch. Please try again.", { autoClose: 3000 });
      
    }
  };

  const handleInputChange = (e) => {
    setBatchData({
      ...batchData,
      [e.target.name]: e.target.value,
    });
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
                  name="batchName"
                  placeholder="Enter batch name"
                  value={batchData.batchName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={batchData.startDate}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={batchData.endDate}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="numberOfTrainee">Number of Trainees</Label>
                <Input
                  type="number"
                  id="numberOfTrainee"
                  name="numberOfTrainee"
                  placeholder="Enter number of trainees"
                  value={batchData.numberOfTrainee}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <Button color="primary" type="submit" block>
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Batch;
