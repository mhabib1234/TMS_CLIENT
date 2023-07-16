import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TraineeSignup = () => {
  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [educationalInstitute, setEducationalInstitute] = useState('');
  const [domain, setDomain] = useState('');
  const [cgpa, setCGPA] = useState(0.0);
  const [passingYear, setPassingYear] = useState(0);
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
              <h2 className="text-center mb-4">Trainee Signup</h2>
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
                <Label for="gender">Gender</Label>
                <Input
                  type="select"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
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
                <Label for="degreeName">Degree Name</Label>
                <Input
                  type="text"
                  id="degreeName"
                  placeholder="Enter degree name"
                  value={degreeName}
                  onChange={(e) => setDegreeName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="educationalInstitute">Educational Institute</Label>
                <Input
                  type="text"
                  id="educationalInstitute"
                  placeholder="Enter educational institute"
                  value={educationalInstitute}
                  onChange={(e) => setEducationalInstitute(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="domain">Domain</Label>
                <Input
                  type="text"
                  id="domain"
                  placeholder="Enter domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="cgpa">CGPA</Label>
                <Input
                  type="number"
                  id="cgpa"
                  placeholder="Enter CGPA"
                  step={(0.1)}
                  min={0.0}
                  max={4.0}
                  value={cgpa}
                  onChange={(e) => setCGPA(parseFloat(e.target.value))}
                  />
                  </FormGroup>
                  <FormGroup>
            <Label for="passingYear">Passing Year</Label>
            <Input
              type="number"
              id="passingYear"
              placeholder="Enter passing year"
              value={passingYear}
              onChange={(e) => setPassingYear(parseInt(e.target.value))}
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

export default TraineeSignup;
