import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from "reactstrap";

const SubmitAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    // Make API call to fetch assignments
    axios
      .get("http://localhost:9080/assignment/all")
      .then((response) => {
        setAssignments(response.data.Assignments);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, []);

  const handleOpenModal = (assignment) => {
    setSelectedAssignment(assignment);
    setModalOpen(true);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("assignmentId", selectedAssignment.id);
    formData.append("traineeId", 1); // Replace 1 with the actual traineeId
    formData.append("time", new Date().toISOString());

    // Append the file to the formData
    if (file) {
      formData.append("file", file);
    }

    // Make API call to submit assignment
    axios
      .post(`http://localhost:9080/submit-assignment/${selectedAssignment.id}`, formData)
      .then((response) => {
        // Handle success
        console.log("Assignment submitted successfully!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error submitting assignment:", error);
      });

    // Close the modal after submission
    setModalOpen(false);
  };


  return (
    <Container>
      <h1>Assignment List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Deadline</th>
            <th>File</th>
            <th>Schedule Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.name}</td>
              <td>{assignment.type}</td>
              <td>{new Date(assignment.deadline).toLocaleDateString()}</td>
              <td>
                <a href={assignment.fileUrl} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
              <td>{assignment.scheduleName}</td>
              <td>
                <Button color="primary" onClick={() => handleOpenModal(assignment)}>
                  Submit Assignment
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(false)}>Submit Assignment - {selectedAssignment && selectedAssignment.name}</ModalHeader>
        <ModalBody>
          <Container>
            <FormGroup>
              <Label for="file">Upload File:</Label>
              <Input type="file" name="file" id="file" onChange={handleFileChange} />
            </FormGroup>
            <Button color="primary" onClick={handleSubmit}>
              Upload
            </Button>
          </Container>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default SubmitAssignment;
