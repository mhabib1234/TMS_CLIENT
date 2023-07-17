import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScheduleBatch = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseType: 'Common',
    startDate: '',
    endDate: '',
    courseId: '',
    batchesIds: [],
  });
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:9080/course/all');
      const courses = response.data.Courses.map((course) => ({
        id: course.id.toString(),
        name: course.name,
      }));
      setCourseList(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:9080/schedule-batch', formData);
      toast.success(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data);
      } else {
        toast.error('Error scheduling batch');
      }
      console.error('Error scheduling batch:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'batchId' && formData.courseType === 'Domain Specific') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        batchesIds: [parseInt(value)],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  
  const handleCourseChange = async (e) => {
    const selectedCourse = courseList.find((course) => course.name === e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      courseName: e.target.value,
      courseId: selectedCourse ? selectedCourse.id : '',
      batchesIds: selectedCourse.courseType === 'Common' ? [] : prevFormData.batchesIds,
    }));
  
    if (e.target.value && e.target.value !== '') {
      try {
        if (selectedCourse.courseType === 'Common') {
          const response = await axios.get('http://localhost:9080/batch/all');
          const batchIds = response.data.map((batch) => batch.id);
          setFormData((prevFormData) => ({
            ...prevFormData,
            batchesIds: batchIds,
          }));
        }
      } catch (error) {
        console.error('Error fetching batch IDs:', error);
      }
    }
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
                  name="courseName"
                  value={formData.courseName}
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
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
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
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="courseId">Course ID</Label>
                <Input
                  type="text"
                  id="courseId"
                  name="courseId"
                  value={formData.courseId}
                  disabled
                />
              </FormGroup>

              {formData.courseType === 'Domain Specific' && (
                <FormGroup>
                  <Label for="batchId">Batch ID</Label>
                  <Input
                    type="number"
                    id="batchId"
                    name="batchId"
                    placeholder="Enter batch ID"
                    value={formData.batchId}
                    onChange={handleInputChange}
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
      <ToastContainer />
    </div>
  );
};

export default ScheduleBatch;
