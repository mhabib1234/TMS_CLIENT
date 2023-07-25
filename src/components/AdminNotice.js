import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminNotice = () => {
  const [formData, setFormData] = useState({
    title: '',
    file: null,
    classroomId: '',
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      if (formData.title) {
        formDataToSend.append('title', formData.title);
      }

      if (formData.file !== null) {
        formDataToSend.append('file', formData.file);
      }

      formDataToSend.append('classroomId', formData.classroomId);
      formDataToSend.append('senderEmail', user.userEmail);
    
      console.log(formDataToSend);

      const response = await axios.post('http://localhost:9080/notice', formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data);
      setFormData({
        title: '',
        file: null,
        classroomId: '', // Reset the classroomId field after form submission
      });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data);
      } else {
        toast.error('Failed to create Notice');
      }
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
      file: file || null,
    }));
  };

  return (
    <div>
      <Row className="justify-content-center align-items-center ">
        <Col md={12}>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Input
                    type="text"
                    name="classroomId"
                    value={formData.classroomId}
                    onChange={handleInputChange}
                    placeholder="Classroom ID"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Send notice to the classrooms..."
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input type="file" name="file" onChange={handleFileChange} />
                </FormGroup>
              </Col>
              <Col md={2}>
                <Button color="primary" type="submit" block>
                  Post
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminNotice;
