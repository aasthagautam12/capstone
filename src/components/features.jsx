import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Features() {
  return (
    <>
      <Row>
        <Col xs={6} md={6}>
          <video
            className="VideoInput_video"
            width="100%"
            height="300px"
            controls
            src={source}
            autoplay=""
            loop=""
          />
        </Col>
        <Col xs={6} md={6}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          dolores itaque iure dolor nisi, quod ab, modi commodi necessitatibus
          eaque hic? Doloremque itaque animi, ipsam corrupti sunt sed soluta.
          Corporis?
        </Col>
      </Row>
    </>
  );
}

export default Features;
