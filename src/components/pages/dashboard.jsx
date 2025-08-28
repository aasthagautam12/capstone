import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";
import SampleImg from "../../assets/images/sample.jpg";
import SampleVideo from "../../assets/videos/samplevideo.mp4";
import Features from "../features";

import "../../assets/dashboard.css";

// import CustomButton from "../button";
import LearnerLayout from "../../Layout/learnerLayout";

function dashboard() {
  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleDrop = (event) => {
    setSource();
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <>
      {/* top navigation */}
      <LearnerLayout />
      {/* block for videos uploading */}
      <Container className="mt-5 ">
        <Row>
          <Col xs={6} md={6} className="pt-5">
            <Row>
              <h2 className="text-start">
                <em>Movement analysis made easy.</em>
              </h2>
              <p className="text-start mb-3">
                <em>
                  {" "}
                  Track form, capture data, and analyze movement for any sport
                  or activity in just seconds. With AI-powered screenings,
                  you’ll receive instant scores, detailed feedback, and
                  actionable insights to improve performance and reduce the risk
                  of injury. Whether you’re training in person, coaching
                  remotely, or reviewing your own sessions, our platform makes
                  professional-level movement analysis simple, fast, and
                  accessible.
                </em>
              </p>
              <Col xs={6} md={6} className="my-auto text-start">
                <input
                  ref={inputRef}
                  className="VideoInput_input"
                  type="file"
                  onChange={handleFileChange}
                  accept=".mov,.mp4"
                />
                {!source && (
                  <Button
                    className="custom-button button-add"
                    variant="success"
                    onClick={handleChoose}
                  >
                    Add video
                  </Button>
                )}

                {source && (
                  <video
                    className="VideoInput_video"
                    width="100%"
                    height="300px"
                    controls
                    src={source}
                    autoplay=""
                    loop=""
                  />
                )}
                <div className="VideoInput_footer">
                  {/* {source || "Nothing selectd"} */}
                </div>

                {/* <Button variant="success">Add video</Button> */}

                {/* <CustomButton variant={"success"} data={"Add video"} /> */}
              </Col>
              <Col xs={6} md={6} className="my-auto">
                <Button
                  variant="danger"
                  className="custom-button button-drop"
                  onClick={handleDrop}
                >
                  {" "}
                  Drop Video
                </Button>

                {/* <CustomButton variant={"danger"} data={"Drop video"} /> */}
              </Col>
            </Row>

            {/* <Button variant={"success"} data={"Add Video"} /> */}
          </Col>
          <Col xs={6} md={6}>
            <video
              className="VideoInput_video"
              width="100%"
              height="300px"
              controls
              src={SampleVideo}
              autoPlay=""
              loop=""
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <h2 className="mx-5">Key features </h2>
        <Features />
        <Features reverse={true} />
        <Features />
        <Features reverse={true} />
      </Container>
    </>
  );
}

export default dashboard;
