import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, CardImg, CardImgOverlay, FormGroup, Label, CardTitle, Input, Button, Row, Col } from "reactstrap";
import Notice from "./Notice";
import placeholderImage from "../../assets/images/bg/bg3.jpg";
import BlogPage from "./PostNotice";
import NoticeComponent from "../../components/NoticeComponent";
import axios from "axios";
import ClassroomCard from "../../components/ClassroomCard";


const ClassroomDetails = () => {
  const { classroomName } = useParams();
  
  const [classroomId, setClassroomId] = useState(null);

  useEffect(() => {
    // Make the API call to fetch the classroomId using the classroomName
    axios
      .get(`http://localhost:9080/classroom/${classroomName}`)
      .then((response) => {
        // Assuming the response.data contains the classroomId
        setClassroomId(response.data.classroomId);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching classroomId:", error);
      });
  }, [classroomName]); //

  return (
    <Container>
      <div className="navbar">
        <Link to="/other-page" className="navbar-link">
          View All Messages & Notice
        </Link>
      </div>
      <div>
        <Card inverse>
          <CardImg alt="Card image cap" src={placeholderImage} style={{ height: 170 }} width="100%" />
          <CardImgOverlay className="overlay">
            <CardTitle tag="h5">{classroomName}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
 <div>
        <Notice/>
      </div>
      <Row className="mt-5">
        <Col md={7}>
          <BlogPage />
        </Col>
        <Col md={5}>
        <NoticeComponent classroomId={2} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClassroomDetails;