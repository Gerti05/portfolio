import React from "react"
import { Col, Form, Button } from "react-bootstrap"

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <div id="form">
      <Form
        className="mt-5 text-center"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Form.Label className="intro-h pb-2">Contact</Form.Label>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Full Name" type="text" name="name" />
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="message"
            as="textarea"
            rows="4"
            placeholder="Your Message"
          />
        </Form.Group>
        <Button className="webBtn float-center" type="submit">
          Submit<FontAwesomeIcon className="ml-1" size="lg" icon={faArrowCircleRight} />
        </Button>
      </Form>
    </div>
  )
}

export default Contact
