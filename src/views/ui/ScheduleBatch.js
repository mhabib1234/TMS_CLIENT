import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ScheduleBatch = () => {
  const [courseName, setCourseName] = useState('');
  const [courseType, setCourseType] = useState('Common');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');

  // A mock list of courses with IDs
  const courseList = [
    { id: '1', name: 'Course 1' },
    { id: '2', name: 'Course 2' },
    { id: '3', name: 'Course 3' },
    // Add more courses as needed
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const scheduleBatchData = {
      courseName,
      courseType,
      startDate,
      endDate,
      courseId,
      batchId: courseType === 'Domain Specific' ? parseInt(batchId) : null
    };
    // Perform form submission logic here with the scheduleBatchData
    console.log(scheduleBatchData);
  };

  const handleCourseChange = (e) => {
    const selectedCourse = courseList.find((course) => course.name === e.target.value);
    setCourseName(e.target.value);
    setCourseId(selectedCourse ? selectedCourse.id : '');
    setBatchId('');
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Schedule Batch</h2>
              <FormGroup>
                <Label for="courseName">Course Name</Label>
                <Input
                  type="select"
                  id="courseName"
                  value={courseName}
                  onChange={handleCourseChange}
                  required
                >
                  <option value="">Select a course</option>
                  {courseList.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="courseType">Course Type</Label>
                <Input
                  type="select"
                  id="courseType"
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <option value="Common">Common</option>
                  <option value="Domain Specific">Domain Specific</option>
                </Input>
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
                <Label for="courseId">Course ID</Label>
                <Input
                  type="text"
                  id="courseId"
                  value={courseId}
                  disabled
                />
              </FormGroup>

              {courseType === 'Domain Specific' && (
                <FormGroup>
                  <Label for="batchId">Batch ID</Label>
                  <Input
                    type="number"
                    id="batchId"
                    placeholder="Enter batch ID"
                    value={batchId}
                    onChange={(e) => setBatchId(e.target.value)}
                  />
                </FormGroup>
              )}

              <Button color="primary" type="submit" block>
                Schedule
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScheduleBatch;
