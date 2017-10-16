import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


/*
  Component for Amazon IoT Button presses.

  Use the Google Sheets API to read the Google Sheet at: https://docs.google.com/spreadsheets/d/1WU5zKwuX9R1kudT9obIZPvE-Gk6qEnZj3pwkywDq9m0
  https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}

  Need to write a function that:
    -takes array of array of times, converts to radian, plots on a circle (clock)
     -If AM, use yellow, if PM, use dark blue
     -Input will be array of arrays, such as: [[09:03:00 PM],[05:45:00 AM],[04:13:00 PM],[09:29:00 AM]]
     -

  Create a component that:
    -Plots a "clock"
      -Circle, with time gridlines
        -Major gridlines: Every 90 degrees
        -Minor gridlines: Every 6 degrees

*/
class ButtonClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    var radian = 0.0174532925;
  }

  render() {
    return (
      <Row className="clock-stack" id="clock-stack">
        <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
          <div className="clock-face"></div>
        </Col>
      </Row>
    )
  }
}

export default ButtonClock;
