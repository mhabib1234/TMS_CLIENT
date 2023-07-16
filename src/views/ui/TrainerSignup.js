import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TrainerSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [designation, setDesignation] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [expertises, setExpertises] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [presentAddress, setPresentAddress] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Trainer Signup</h2>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="profilePicture">Profile Picture</Label>
                <Input
                  type="text"
                  id="profilePicture"
                  placeholder="Enter profile picture URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="designation">Designation</Label>
                <Input
                  type="text"
                  id="designation"
                  placeholder="Enter designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="joiningDate">Joining Date</Label>
                <Input
                  type="date"
                  id="joiningDate"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="yearsOfExperience">Years of Experience</Label>
                <Input
                  type="number"
                  id="yearsOfExperience"
                  placeholder="Enter years of experience"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="expertises">Expertises</Label>
                <Input
                  type="text"
                  id="expertises"
                  placeholder="Enter expertises"
                  value={expertises}
                  onChange={(e) => setExpertises(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="contactNumber">Contact Number</Label>
                <Input
                  type="tel"
                  id="contactNumber"
                  placeholder="Enter contact number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="presentAddress">Present Address</Label>
                <Input
                  type="textarea"
                  id="presentAddress"
                  placeholder="Enter present address"
                  value={presentAddress}
                  onChange={(e) => setPresentAddress(e.target.value)}
                />
              </FormGroup>

              <Button color="primary" type="submit" block>
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrainerSignup;
