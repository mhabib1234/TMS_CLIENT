import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from "reactstrap";
import placeholderImage from "../../assets/images/bg/bg3.jpg";
import NoticeComponent from "../../components/NoticeComponent";
import axios from "axios";
import TrainerMessage from "../../components/TrainerMessage";
import Notice from "./Notice";

const ClassroomDetails = () => {
  const { classroomName } = useParams();
  const [classId, setClassId] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Make the API call to fetch the classroomId using the classroomName
    axios
      .get(`http://localhost:9080/classroom/${classroomName}`)
      .then((response) => {
        // Assuming the response.data contains the classroomId
       
        setClassId(response.data);
      
        setLoading(false);
      })
      .catch((error) => {
      //  console.error("Error fetching classroomId:", error);
        setLoading(false);
      });
  }, [classroomName]);
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
      <Notice/>
      <Row className="mt-5">
        <Col md={7}>
        { classId !== null && <TrainerMessage classroomId={classId} />}
        </Col>
        <Col md={5}>
          {classId !== null && <NoticeComponent classroomId={classId} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ClassroomDetails;
