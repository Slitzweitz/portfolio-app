// This component will send a request to a back end Express server,
// which is listening on port 8080. That server will then send the form
// information to me using SMTP (Express-Mailer with Gmail SMTP)
import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: '',
      email: '',
      phone: '',
      company: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // send to the express server
    fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: this.state.personName,
        email: this.state.email,
        phone: this.state.phone,
        company: this.state.company
      })
    })
    .then(res => res.json())
    .then(resJson => {

    })
    .catch((e) => {
      console.error(e);
    })
  }

  render() {
    return (
      <Row className="contact-stack" id="contact-stack">
        <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formName"
              type="text"
              label="Name"
              placeholder="Your Name"
            />
            <FieldGroup
              id="formEmail"
              type="text"
              label="Email"
              placeholder="Your Email"
            />
            <FieldGroup
              id="formPhone"
              type="text"
              label="Phone"
              placeholder="Your Phone"
            />
            <FieldGroup
              id="formCompany"
              type="text"
              label="Company"
              placeholder="Your Company"
            />
            <Button type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    )
  }
}

export default ContactForm;
