import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, CardBody, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllAssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:9080/assignment/trainer/1');
      setAssignments(response.data.Assignments);
    } catch (error) {
      toast.error('Error fetching assignments');
    }
  };

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const handleViewSubmittedAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    toggleModal();
  };

  const downloadSubmittedAssignmentFile = (submittedAssignmentId) => {
    console.log(submittedAssignmentId);
    axios
    .get(`http://localhost:9080/submit-assignment/${submittedAssignmentId}/download`)
    .then((response) => {
        
      toast.success("File downloaded successfully!");
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
      toast.error("Error downloading file: " + error.message);
    });

  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row className="justify-content-end mt-6">
          <Col xs="auto">
            <Link to="/trainer/create/assignment">
              <Button color="primary">Create Assignment</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-4">Assignments</h2>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>Course Name</th>
                    <th>Assignment Name</th>
                    <th>Assignment Type</th>
                    <th>Deadline</th>
                    <th>File</th>
                    <th>Total Submitted</th>
                    <th>Submitted Files</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr key={assignment.id} className={index % 2 === 0 ? 'table-light' : ''}>
                      <td>{assignment.scheduleName}</td>
                      <td>{assignment.name}</td>
                      <td>{assignment.type}</td>
                      <td>{new Date(assignment.deadline).toLocaleDateString()}</td>
                      <td>{/* File */}</td>
                      <td>{assignment.totalSubmitted}</td>
                      <td>
                        <Button
                          color="info"
                          disabled={assignment.totalSubmitted === 0}
                          onClick={() => handleViewSubmittedAssignment(assignment)}
                        >
                          View
                        </Button>
                      </td>
                      <td>
                        <Link to={`/trainer/update/assignment/${assignment.id}`}>
                          <Button color="warning">Update</Button>
                        </Link>
                      </td>
                      <td>
                        <Button color="danger">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
 {/* Modal */}
 <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>View Submitted Assignment</ModalHeader>
        <ModalBody>
        {selectedAssignment ? (
            <div>
              <h3>Assignment Details:</h3>
              <p>Schedule Name: {selectedAssignment.scheduleName}</p>
              <p>Assignment Name: {selectedAssignment.name}</p>
              <p>Assignment Type: {selectedAssignment.type}</p>
              <p>Deadline: {new Date(selectedAssignment.deadline).toLocaleDateString()}</p>

              <h3>Submitted Assignments:</h3>
              {selectedAssignment.submittedAssignment.length === 0 ? (
                <p>No submissions yet.</p>
              ) : (
                <div>
                  {selectedAssignment.submittedAssignment.map((submission, index) => (
                    <Card key={submission.id} className="mb-3">
                      <CardBody>
                        <p className="mb-0">Trainee ID: {submission.traineeId}</p>
                        <p className="mb-0">Trainee Name: {submission.traineeName}</p>
                        <p className="mb-0">Submitted Time: {new Date(submission.createdTime).toLocaleString()}</p>
                        <p className="mb-0">
                          File URL:{' '}
                          <a
                            href="#"
                            onClick={() => downloadSubmittedAssignmentFile(submission.id)}
                          >
                            {submission.submitFileUrl}
                          </a>
                        </p>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AllAssignmentList;