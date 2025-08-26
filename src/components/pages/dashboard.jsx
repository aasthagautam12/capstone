import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SampleImg from "../../assets/images/sample.jpg";
// import CustomButton from "../button";
import Button from "react-bootstrap/Button";

import LearnerLayout from "../../Layout/learnerLayout";

function dashboard() {
  return (
    <>
      <LearnerLayout />
      <Container>
        <Row>
          <Col xs={6} md={6} className="pt-5">
            <Row>
              <h2 className="text-start">
                <em>Movement analysis made easy.</em>
              </h2>
              <p className="text-start">
                Track form, gather data, and analyze movement for any sport or
                activity in seconds. With AI-powered screenings, get instant
                scores and insights whether you’re training in person or online.
              </p>
              <Col xs={6} md={6}>
                <Button variant="success">Add video</Button>

                {/* <CustomButton variant={"success"} data={"Add video"} /> */}
              </Col>
              <Col xs={6} md={6}>
                <Button variant="danger">Drop Video</Button>

                {/* <CustomButton variant={"danger"} data={"Drop video"} /> */}
              </Col>
            </Row>

            {/* <Button variant={"success"} data={"Add Video"} /> */}
          </Col>
          <Col xs={6} md={6}>
            <Image src={SampleImg} thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default dashboard;
