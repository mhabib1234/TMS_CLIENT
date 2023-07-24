import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TraineeSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profilePicture: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    password: '',
    contactNumber: '',
    degreeName: '',
    educationalInstitute: '',
    domain: '',
    cgpa: 0.0,
    passingYear: 0,
    presentAddress: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9080/trainee/register", formData, {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.status === 201) {
        // Display success toast notification
        toast.success("Registration successful!", { autoClose: 3000 });
        // Clear form fields
        setFormData({
          fullName: '',
          profilePicture: '',
          gender: '',
          dateOfBirth: '',
          email: '',
          password: '',
          contactNumber: '',
          degreeName: '',
          educationalInstitute: '',
          domain: '',
          cgpa: 0.0,
          passingYear: 0,
          presentAddress: '',
        });
      } else {
        // Display error toast notification
        toast.error("Registration failed. Please try again.", { autoClose: 3000 });
      }
    } catch (error) {
      // Display error toast notification
      toast.error("Error registering trainee. Please try again.", { autoClose: 3000 });
      console.log("Error registering trainee:", error);
    }
  };


return (
  <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
    <Container>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <Form onSubmit={handleFormSubmit}>
            <h2 className="text-center mb-4">Trainee Signup</h2>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="profilePicture">Profile Picture</Label>
              <Input
                type="text"
                id="profilePicture"
                name="profilePicture"
                placeholder="Enter profile picture URL"
                value={formData.profilePicture}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="dateOfBirth">Date of Birth</Label>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter contact number"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="degreeName">Degree Name</Label>
              <Input
                type="text"
                id="degreeName"
                name="degreeName"
                placeholder="Enter degree name"
                value={formData.degreeName}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="educationalInstitute">Educational Institute</Label>
              <Input
                type="text"
                id="educationalInstitute"
                name="educationalInstitute"
                placeholder="Enter educational institute"
                value={formData.educationalInstitute}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="domain">Domain</Label>
              <Input
                type="text"
                id="domain"
                name="domain"
                placeholder="Enter domain"
                value={formData.domain}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="cgpa">CGPA</Label>
              <Input
                type="number"
                id="cgpa"
                name="cgpa"
                placeholder="Enter CGPA"
                step={0.1}
                min={0.0}
                max={4.0}
                value={formData.cgpa}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="passingYear">Passing Year</Label>
              <Input
                type="number"
                id="passingYear"
                name="passingYear"
                placeholder="Enter passing year"
                value={formData.passingYear}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="presentAddress">Present Address</Label>
              <Input
                type="textarea"
                id="presentAddress"
                name="presentAddress"
                placeholder="Enter present address"
                value={formData.presentAddress}
                onChange={handleInputChange}
              />
            </FormGroup>

            <Button color="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <ToastContainer />
  </div>
);

};

export default TraineeSignup;
