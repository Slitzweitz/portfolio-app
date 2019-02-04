import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import ApiPicker from './Components/ApiPicker';
import NavMenu from './Components/NavMenu';
import Coords from './Components/Coords.jsx';
import ContactForm from './Components/ContactForm';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import './App.css';
import ButtonClock from './Components/Clock/ButtonClock';
// <ButtonClock />

/// Just checking to see how the desktop GitHub app works

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentShow: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    !this.state.componentShow ?
    this.setState({
      componentShow: true
    }) :
    this.setState({
      componentShow: false
    })
  }

  render() {
    return (
      <div className="App">
      <NavMenu />
        <div className="App-header">
          Colin Barlow
        </div>
        <Grid>
          <PageHeader>
            D3 Data Clock
          </PageHeader>
          <ButtonClock />
          <Row className="weather-stack">
            <PageHeader>
              Weather App
            </PageHeader>
            <Col md={4}>
              <div className="weather-desc">
                <p>This weather component was built using React principles. It passes data down to children components through props. It uses a standard browser API to get user location (if allowed), which then uses fetch to call a third party API (openweathermap) for the current weather, based on the user's location.</p>
              </div>
            </Col>
            <Col md={8}>
              <Coords />
            </Col>
          </Row>
          <Row className="sandbox-stack" id="sandbox-stack">
            <PageHeader>
            My API Sandbox
            </PageHeader>
            <ApiPicker />
          </Row>
          <Row className="fcc-stack">
            <PageHeader>
              Front-End Projects
            </PageHeader>
            <Showcase />
          </Row>
          <Row className="contact-stack">
            <PageHeader>
              Contact Me
            </PageHeader>
            <div>
            <ContactForm />
            <Col lg={4} md={6} className="profiles-logo">
              <a href="https://linkedin.com/in/colinmbarlow">
              <img height="85px" src="https://colinmbarlow.com/img/linkedin-logo.svg" id="LinkedIn" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Slitzweitz">
              <img height="85px" src="https://colinmbarlow.com/img/github-logo.png" id="Github" alt="GitHub"/>
            </a>
            </Col>
            </div>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;

/**
<img src={headshot} className="App-headshot" alt="headshot" />

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
