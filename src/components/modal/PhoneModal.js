import React, { useState } from "react";
import { Modal, Form, Container, Button, Row, Col } from "react-bootstrap";

const initState = {
  title: "",
  releasedOn: "",
  founder: "",
  memory: "",
  camera: "",
  color: "",
  postedOn: "",
};

export const PhoneModal = (props) => {
  const [show, setShow] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState(initState);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    await props.postPhone(phoneDetails);
    setPhoneDetails(initState);
    handleClose(true);
  };

  const addStyle = {
    backgroundColor: "#989C9D",
    border: "none",
  };

  const handleChange = (e) => {
    e.persist();
    setPhoneDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(phoneDetails);

  return (
    <>
      <Container className="text-center">
        <Button style={addStyle} onClick={handleShow}>
          Add phone
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="title"
                      value={phoneDetails.title}
                      placeholder="Iphone 13 Pro Max"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Memory</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="memory"
                      value={phoneDetails.memory}
                      placeholder="128GB"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Camera</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="camera"
                      value={phoneDetails.camera}
                      placeholder="24mpx"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="color"
                      value={phoneDetails.color}
                      placeholder="Space grey"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Founder</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="founder"
                      value={phoneDetails.founder}
                      placeholder="Steve Jobs"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Released on</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      name="releasedOn"
                      value={phoneDetails.releasedOn}
                      placeholder="XX/XX/XXXX"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="summary"
                  value={phoneDetails.summary}
                  as="textarea"
                  placeholder="This is phone for you..."
                  rows={7}
                />
              </Form.Group>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
