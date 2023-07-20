import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Card, CardImg, CardImgOverlay, FormGroup, Label, CardTitle, Input, Button, Row, Col } from "reactstrap";
import placeholderImage from "../../assets/images/bg/bg3.jpg";
import TraineeMessage from "../../components/TraineeMessage";
import NoticeComponent from "../../components/NoticeComponent";

const TraineeClassroom = () => {
  const { classroomName } = useParams();

  //fetching data
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const { role, userEmail } = userData;
      // Determine which API endpoint to call based on the role
      const apiEndpoint = role === "Trainee" ? `/trainee/get/${userEmail}` : `/trainer/get/${userEmail}`;

      // Make the API call
      axios.get(apiEndpoint)
        .then((response) => {
          // Handle the response data
          console.log("API Response:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

 
  return (
    <Container>
      <div>
        <Card inverse>
          <CardImg alt="Card image cap" src={placeholderImage} style={{ height: 170 }} width="100%" />
          <CardImgOverlay className="overlay">
            <CardTitle tag="h5">{classroomName}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
      <Row className="mt-5">
        <Col md={7}>
         <TraineeMessage/>
        </Col>
        <Col md={5}>
         <NoticeComponent/>
        </Col>
      </Row>
    </Container>
  );
};

export default TraineeClassroom;


