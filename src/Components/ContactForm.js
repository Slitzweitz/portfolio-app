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
      company: '',
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // send to the express server
    // create new Form Data object
    var formobj = new FormData();
    //
    var reqbody = {
      personName: this.state.personName,
      email: this.state.email,
      phone: this.state.phone,
      company: this.state.company
    };

    for (var x in reqbody) {
      formobj.append(x, reqbody[x]);
      console.log(formobj);
    };

    console.log(formobj);

    fetch('/contact', {
      method: 'POST',
      body: formobj
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson);
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
              name="personName"
              placeholder="Your Name"
              value={this.state.personName}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formEmail"
              type="text"
              label="Email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formPhone"
              type="text"
              label="Phone"
              name="phone"
              placeholder="Your Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <FieldGroup
              id="formCompany"
              type="text"
              label="Company"
              name="company"
              placeholder="Your Company"
              value={this.state.company}
              onChange={this.handleChange}
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
