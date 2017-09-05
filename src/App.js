import React, { Component } from 'react';
import headshot from './UpdatedHeadshot.jpg';
import { Grid, Row, Col, PageHeader, ProgressBar } from 'react-bootstrap';
import ApiPicker from './Components/ApiPicker';
import NavMenu from './Components/NavMenu';
import ContactForm from './Components/ContactForm';
import Showcase from './Components/Showcase';
import './App.css';

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
            I'm a bright young problem solver with five years of professional customer service and sales experience. I know there are no excuses in the real world, and I'll have no problem telling you what I can and cannot do. Use the contact form below if you have any questions.
            </p>
            </Col>
          </Row>
          <Row className="profiles-stack" id="profiles-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <p>
                Let's get right to it, here are samples of my work:<br />
                Check out my <a href="https://github.com/Slitzweitz">GitHub here</a>
              </p>
            </Col>
          </Row>
          <Row className="fcc-stack">
            <Showcase />
          </Row>
          <Row className="sandbox-stack">
            <Col>
              <ApiPicker />
            </Col>
          </Row>
          <Row className="clock-stack">
            <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
              <p className="spotifybutton-intro">
                This will be a visualization of my Amazon IoT button press times. It will be a clock face with a certain color symbol based on AM/PM, with each press plotted on the outside border of the clock at the time it was pressed.
              </p>
              <p className="spotifybutton-outro">
              </p>
            </Col>
          </Row>
          <ContactForm />
        </Grid>
      </div>
    );
  }
}

export default App;


// <Col lg={4} md={6} mdOffset={3} lgOffset={4}>
//   <AmazonButton />
// </Col>

// <ul> turn this into cards
// <li>Custom Stateful React Components</li>
// <li>APIs built with Express</li>
// <li>Data Storage using MongoDB (mLab)</li>
// <li>AWS application hosting, administration</li>
// </ul>
