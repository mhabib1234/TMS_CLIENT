import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { Container, Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from "reactstrap";
import placeholderImage from "../../assets/images/bg/bg3.jpg";
import NoticeComponent from "../../components/NoticeComponent";
import axios from "axios";
import TrainerMessage from "../../components/TrainerMessage";
import Notice from "./Notice";

const AdminClassroom = () => {
  const [classId, setClassId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [classroom, setClassroom] = useState('1');
  

  return (
    <Container>
      <div>
        <Card inverse>
          <CardImg alt="Card image cap" src={placeholderImage} style={{ height: 170 }} width="100%" />
          <CardImgOverlay className="overlay">
          </CardImgOverlay>
        </Card>
      </div>
      <div>
   
      </div>
      <Row className="mt-5">
        <Col md={8}>
       {<TrainerMessage/>}
        </Col>
        <Col md={4}>
      {<NoticeComponent/>}
        </Col>
      </Row>
    </Container>
  );
};

export default  AdminClassroom;
