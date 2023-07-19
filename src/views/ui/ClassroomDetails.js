import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, CardImg, CardImgOverlay, FormGroup, Label, CardTitle, Input, Button, Row, Col } from "reactstrap";
import Notice from "./Notice";
import placeholderImage from "../../assets/images/bg/bg3.jpg";

const ClassroomDetails = () => {
  const { classroomName } = useParams();
 

  return (
    <Container>
      <div className="navbar">
        <Link to="/other-page" className="navbar-link">
          Go to Other Page
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
    </Container>
  );
};

export default ClassroomDetails;
