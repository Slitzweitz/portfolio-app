
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
import * as d3 from 'd3';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const radian = 0.0174532925,
outerRadius = 80,
fullCircle = Math.PI * 2,
margin = 50,
width = (outerRadius+margin)*2,
height = (outerRadius+margin)*2;

var times = [];

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

// function processTimes() {
// }

export default class ButtonClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawn: false,
      painted: false
    }
  }

  componentDidMount() {
    // create button presses, pointing from center point outwards
    // at an angle according to the time they were pressed
    // d3.select("svg")
    //   .data(times)
    //   .enter()
    //     .append('div.press')
    //     .style('length', function(d) { return (d * 120) + 'px'; })
    //     .text(String)

    // var clockFace = svg.append('g')
    // .attr('id', 'clock-face')
    // .attr('transform', 'translate(' + (outerRadius + margin) + ',' + (outerRadius + margin) + ')');

    //  Create an arc generator
    var arcGen = d3.arc();
    // Generate
    var arcData = arcGen({
      startAngle: 0,
      endAngle : fullCircle,
      innerRadius : outerRadius - 20,
      outerRadius : outerRadius
    })
    // Create path element, give data
    d3.select("g")
      .append("path")
      .attr("d", arcData)
      .attr("stroke-width", "3px");
  }

  render() {
    return (
      <Row className="clock-stack" id="clock-stack">
        <Col lg={8} md={6} mdOffset={3} lgOffset={2}>
          <div className="clock" id="clock">
            <svg {...styles}>
              <g></g>
            </svg>
          </div>
        </Col>
      </Row>
    )
  }
}
