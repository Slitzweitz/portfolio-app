import React, { Component } from 'react';
import {  Thumbnail, Button, Col } from 'react-bootstrap';

export default class Showcase extends Component {
  render() {
    return (
      <div className="showcase">
        <Col md={4}>
          <Thumbnail className="frontend">
          <h3>Wikipedia Viewer</h3>
            <p>This jQuery project uses the Wikimedia API to return search results input by the user. There is also an option to send the user to a random Wikipedia page!</p>
            <p>
              <Button bsStyle="primary" href="https://codepen.io/Slitzweitz/full/pyRNvo/">Try on CodePen</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
        <Col md={4}>
          <Thumbnail className="frontend">
            <h3>Pomodoro Clock</h3>
            <p>A 25 minute timer that alerts when finished. The Pomodoro technique uses 25 minute increments of work separated by 5 minutes of a break.</p>
            <p>
              <Button bsStyle="primary" href="https://codepen.io/Slitzweitz/full/xwxbpL/">Try on CodePen</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
        <Col md={4}>
          <Thumbnail className="frontend">
            <h3>Weather App</h3>
            <p>A jQuery app that uses AJAX and a browser API for location, to find local, basic weather information. Includes temperature, wind, and current cloud cover</p>
            <p>
            <Button bsStyle="primary" href="https://codepen.io/Slitzweitz/full/yNdYWV/">Try on CodePen</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}
