import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateNotice = () => {
  const [formData, setFormData] = useState({
    noticeTitle: '',
    batchId: '',
    trainerId: '',
    file: null,
    noticeType: 'File',
  });
  const [batchList, setBatchList] = useState([]);
  const [trainerIdError, setTrainerIdError] = useState(false);

  useEffect(() => {
    fetchBatchNames();
  }, []);

  const fetchBatchNames = async () => {
    try {
      const response = await axios.get('http://localhost:9080/batch/get/allName');
      const batches = response.data.Batches.map((batch) => ({
        id: batch.id,
        name: batch.name,
      }));
      setBatchList(batches);
    } catch (error) {
      console.error('Error fetching batch names:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if trainerId is a valid integer
    if (isNaN(formData.trainerId)) {
      setTrainerIdError(true);
      return;
    }

    try {
      let response;

      if (formData.noticeType === 'File') {
        const formDataToSend = new FormData();
        formDataToSend.append('noticeTitle', formData.noticeTitle);
        formDataToSend.append('batchId', formData.batchId);
        formDataToSend.append('trainerId', formData.trainerId);
        formDataToSend.append('file', formData.file);

        const token = localStorage.getItem('token');

        response = await axios.post('http://localhost:9080/notice', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
      } else if (formData.noticeType === 'Message') {
        const postData = {
          noticeTitle: formData.noticeTitle,
          batchId: formData.batchId,
          trainerId: formData.trainerId,
        };

        const token = localStorage.getItem('token');

        response = await axios.post('http://localhost:9080/notice/create', postData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      }

      toast.success(response.data);

      setFormData({
        noticeTitle: '',
        batchId: '',
        trainerId: '',
        file: null,
        noticeType: 'File',
      });
      setTrainerIdError(false);
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

    // Clear the trainerId error when the input changes
    if (name === 'trainerId') {
      setTrainerIdError(false);
    }

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

  const handleNoticeTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      noticeType: value,
    }));
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '50vh' }}>
      <Container>
        <Row className="justify-content-center align-items-center mt-2" style={{ minHeight: '75vh' }}>
          <Col md={6}>
            <Form onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4">Create Notice</h2>
              <FormGroup row>
                <Label for="noticeTitle" sm={4}>
                  Notice Title
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    id="noticeTitle"
                    name="noticeTitle"
                    value={formData.noticeTitle}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="batchId" sm={4}>
                  Batch Name
                </Label>
                <Col sm={8}>
                  <Input
                    type="select"
                    id="batchId"
                    name="batchId"
                    value={formData.batchId}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a batch</option>
                    {batchList.map((batch) => (
                      <option key={batch.id} value={batch.id}>
                        {batch.name}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="trainerId" sm={4}>
                  Trainer ID
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    id="trainerId"
                    name="trainerId"
                    value={formData.trainerId}
                    onChange={handleInputChange}
                    required
                  />
                  {trainerIdError && (
                    <Alert color="danger" className="mt-2">
                      Trainer ID must be an integer
                    </Alert>
                  )}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="noticeType" sm={4}>
                  Notice Type
                </Label>
                <Col sm={8}>
                  <Input
                    type="select"
                    id="noticeType"
                    name="noticeType"
                    value={formData.noticeType}
                    onChange={handleNoticeTypeChange}
                  >
                    <option value="File">Add Attachment</option>
                    <option value="Message">Notice</option>
                  </Input>
                </Col>
              </FormGroup>

              {formData.noticeType === 'File' && (
                <FormGroup row>
                  <Label for="file" sm={4}>
                    File
                  </Label>
                  <Col sm={8}>
                    <Input type="file" id="file" name="file" onChange={handleFileChange} />
                  </Col>
                </FormGroup>
              )}

              <Button color="primary" type="submit" block>
                Create Notice
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default CreateNotice;
