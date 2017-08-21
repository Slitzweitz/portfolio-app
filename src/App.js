import React, { Component } from 'react';
import headshot from './UpdatedHeadshot.jpg';
import { Grid, Row, Col, PageHeader, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import ApiPicker from './Components/ApiPicker';
import NavMenu from './Components/NavMenu';
import './App.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavMenu />
        <div className="App-header">
          <PageHeader>Colin Barlow</PageHeader>
        </div>
        <Grid>
          <Row className="top-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <p className="App-intro">
                Welcome to my portfolio page!
              </p>
              have icons for github and fcc animate in here, or inbetween about-stack (skinny custom css)
              <img src={headshot} className="App-headshot" alt="headshot" />
            </Col>
          </Row>
          <Row className="about-stack" id="about-stack">
            <Col xs={4} md={6} mdOffset={3} xsOffset={4}>
            <p>
            I'm a bright young problem solver with five years of professional customer service and sales experience. I know there are no excuses in the real world, and I'll have no problem telling you what I can and can't do. Use the contact form below if you have any questions.
            </p>
            </Col>
          </Row>
          <Row className="profiles-stack" id="profiles-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
            <p>
            Let's get right to it, here are samples of my work:
            </p>
              <p className="App-github">
                Check out my <a href="https://github.com/Slitzweitz">GitHub here</a>
              </p>
                  <ul> turn this into cards
                    <li>Custom Stateful React Components</li>
                    <li>APIs built with Express</li>
                    <li>Data Storage using MongoDB (mLab)</li>
                    <li>AWS application hosting, administration</li>
                  </ul>
            </Col>
          </Row>
          <Row className="fcc-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <p className="App-fcc">
                Follow my progress on <a href="https://www.freecodecamp.org/slitzweitz">FreeCodeCamp here</a>. <br />Front and Back End Certification coming soon! (show viz with % to complete)
              </p>
            </Col>
          </Row>
          <Row className="sandbox-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <p className="sandboxer-intro">
                Here is a sandboxer for some of my custom built <b>full stack</b> APIs:
              </p>
            </Col>
            <Col lg={4} md={6} mdOffset={3} lgOffset={4}>
              <ApiPicker />
            </Col>
          </Row>
          <Row className="contact-stack" id="contact-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <form>
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
        </Grid>
      </div>
    );
  }
}

export default App;
