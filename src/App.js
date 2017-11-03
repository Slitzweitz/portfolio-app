import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import ApiPicker from './Components/ApiPicker';
import NavMenu from './Components/NavMenu';
import Coords from './Components/Coords.jsx';
import ContactForm from './Components/ContactForm';
import Showcase from './Components/Showcase';
import './App.css';
import ButtonClock from './Components/Clock/ButtonClock';
// <ButtonClock />

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
            <Col md={4} mdOffset={2}>
              <p className="App-intro">
                Welcome to my portfolio page! Here are a few of the technologies that make this page work:
              </p>
            </Col>
            <Col md={4}>
              <ul>
                <li>
                  React Native
                </li>
                <li>
                  Hard Work
                </li>
                <li>
                  Nodejs with Express
                </li>
                <li>
                  Babel and Webpack
                </li>
              </ul>
            </Col>
          </Row>
          <ButtonClock />
          <Coords />
          <Row className="sandbox-stack" id="sandbox-stack">
          <PageHeader>
          My API Sandbox
          </PageHeader>
          <ApiPicker />
          </Row>
          <PageHeader>
          Front-End Projects
          </PageHeader>
          <Row className="fcc-stack">
            <Showcase />
          </Row>
          <PageHeader>Contact Me</PageHeader>
          <ContactForm />
        </Grid>
      </div>
    );
  }
}

export default App;

/**
<img src={headshot} className="App-headshot" alt="headshot" />






**/
// <Col lg={4} md={6} mdOffset={3} lgOffset={4}>
//   <AmazonButton />
// </Col>

// <ul> turn this into cards
// <li>Custom Stateful React Components</li>
// <li>APIs built with Express</li>
// <li>Data Storage using MongoDB (mLab)</li>
// <li>AWS application hosting, administration</li>
// </ul>

//
// <Row className="about-stack" id="about-stack">
//   <Col md={6} mdOffset={3}>
//   <h2>
//   This application started as a simple create-react-app. It now includes a totally custom API sandbox and contact form built from scratch.</h2>
//   <br />
//   <p>
//   I've been developing my own React projects for the past two years as well as attending meetups in San Diego. As soon as I fired up create-react-app, I knew that modern JavaScript frameworks were here to stay. State, re-usable components, and routing are among my favorite features of React. The modern feel of developing in ES6/Webpack/Babel continuous deployment environment allow for rapid improvements and a focus on progress I have not felt elsewhere.
//   </p>
//   </Col>
// </Row>
// <Row className="profiles-stack" id="profiles-stack">
// <Col md={6} mdOffset={3}>
// <p>
// Let's get right to it, here are samples of my work:<br />
// Check out my <a href="https://github.com/Slitzweitz">GitHub here</a> to see Node/Express APIs which you can also test in the sandbox below. The best place to see front end projects is <a href="https://codepen.io/Slitzweitz">my Codepen profile</a>. If you would like to see my self hosted LEMP app, <a href="https://colinmbarlow.com">click here</a>.
// </p>
// </Col>
// </Row>
