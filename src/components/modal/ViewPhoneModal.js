import React, { useState } from "react";
import { Modal, Form, Container, Button, Row, Col } from "react-bootstrap";

export const ViewPhoneModal = (props) => {
  return (
    <>
      <Container className="text-center"></Container>

      <Modal show={!!Object.keys(props.phone).length}>
        <Modal.Header onClick={props.closeModal} closeButton>
          <Modal.Title>Add phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <h4>Title</h4>
                  <p>{props.phone.title}</p>
                </Col>
                <Col xs={6} md={6}>
                  <h4>Memory</h4>
                  <p>{props.phone.memory}GB</p>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <h4>Camera</h4>
                  <p>{props.phone.camera}mpx</p>
                </Col>
                <Col xs={6} md={6}>
                  <h4>Color</h4>
                  <p>{props.phone.color}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <h4>Founder</h4>
                  <p>{props.phone.founder}</p>
                </Col>
                <Col xs={6} md={6}>
                  <h4>Released on</h4>
                  <p>{props.phone.releasedOn}</p>
                </Col>
              </Row>
              <h4>Summary</h4>
              <p>{props.phone.summary}</p>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
