
/*
  Component for Amazon IoT Button presses.

  Use the Google Sheets API to read the Google Sheet at: https://docs.google.com/spreadsheets/d/1WU5zKwuX9R1kudT9obIZPvE-Gk6qEnZj3pwkywDq9m0
  https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}
  AIzaSyDEjCGIX71CuzAfv1JBGbLOhpzImUe_GQA

  Need to write a function that:
    -takes array of array of times, converts to radian, plots on a circle (clock)

  Create a component that:
    -Plots a "clock"
      -Circle, with time gridlines
        -Major gridlines: Every 90 degrees
        -Minor gridlines: Every 6 degrees

*/
import * as d3 from "d3";
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";


const radians = 0.0174532925,
outerRadius = 175,
labelRadius = outerRadius + 20,
fullCircle = Math.PI * 2,
// margin = 50,
// width = (outerRadius+margin)*2,
// height = (outerRadius+margin)*2,
hourLabelRadius = outerRadius - 30,
hourLabelYOffset = 7,
markLength = 17;
// yOffset = 7;

// a dummy array of times converted to decimal time (with no am/pm for now)
var times = [ 20.72, 21.00, 21.00, 21.27,21.37,21.48,21.48,21.52,21.63,21.95,22.58,22.72,22.73,22.75,20.01,22.32,21.27,19.85,16.68,16.68,16.90,16.90,18.01,18.01,16.62,17.57,17.77,18.97,20.27,20.28,20.35,21.00,22.27,22.27,7.32,8.70,16.53,17.00,17.47,19.00,19.33,19.35,17.47,17.65,19.37,22.30,17.01,17.01,17.80,20.00,21.98,16.40,10.98,24.30,24.38,24.47,24.83,24.98,13.01,13.01,13.01,14.00,14.00,14.00,14.00,14.01,14.25,14.35,14.37,14.97,14.97,15.43,15.45,16.01,16.01,11.62,11.70,19.38,19.48,21.97,8.28,17.25,18.01,19.00,16.37,23.87,20.90,21.00,7.22,20.68,20.70,16.63 ];

const styles = {
  width   : 425,
  height  : 405,
  // stroke: "black",
  // strokeWidth: 1
};
// function processTimes() {
// }

export default class ButtonClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawn: false,
      url: "https://sheets.googleapis.com/v4/spreadsheets/1WU5zKwuX9R1kudT9obIZPvE-Gk6qEnZj3pwkywDq9m0/values/AWS-iot-button!H:H/key=AIzaSyDEjCGIX71CuzAfv1JBGbLOhpzImUe_GQA"
    }
  }

  componentWillMount() {
  //   var myHeaders = new Headers();
  //
  //   fetch(this.state.url, {
  //     method: "GET",
  //     headers: myHeaders,
  //
  //   })
  //     .then((doc) => doc.json())
  //     .then((respJson) => {
  //       times.push(respJson);
  //       console.log(respJson);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  }

  componentDidMount() {
    // create button presses, pointing from center point outwards
    // at an angle according to the time they were pressed
    // Convert time to 24hr decimal e.g. 1.35, 6.5, 12.75 and use am/pm tags in data
    var tickScale = d3.scaleLinear()
      .domain([1, 25])
      .range([0, 360]);

    var hourScale = d3.scaleLinear()
      .domain([0, 24])
      .range([0,360])

    // var innerScale = d3.scaleLinear()
    //   .domain([0, /* max number of ticks in a 5 degree interval */])
    //   .range([0, outerRadius]);

    //  Create an arc generator
    var arcGen = d3.arc();
    // Generate
    var arcData = arcGen({
      startAngle: 360,
      endAngle : fullCircle,
      innerRadius : outerRadius - 2,
      outerRadius : outerRadius
    });

    // Create another arc? just need a line graph rotated around a point
    // var innerArc = arcGen({
    //   startAngle: 0,
    //   endAngle: fullCircle,
    //   innerRadius: 0,
    //   outerRadius: innerScale
    // });
    var scvg = d3.select(".clock").append("svg")
      .attr("width", styles.width)
      .attr("height", styles.height);

    var face = scvg.append("g")
      .attr("id", "clock-face")
      .attr("transform", "translate(" + styles.width/2 + "," + styles.height/2 + ")");

    d3.select("g")
      .append("path")
        .attr("d", arcData);

    // var seconds = face.selectAll(".second-tick")
    //   .data(times)
    //     .enter();

    face.selectAll(".second-tick")
      .data(times)
        .enter()
        .append("line")
  			.attr("class", "second-tick")
  			.attr("x1",0)
  			.attr("x2",0)
  			.attr("y1",outerRadius)
  			.attr("y2",outerRadius + markLength)
  			.attr("transform",function(d){
  				return "rotate(" + tickScale(d) + ")";
  			})
        .append("svg:title")
        .text(function(d) { return d; })
        .attr("transform",function(d){
  				return "rotate(" + tickScale(d) + ")";
  			})
        .attr('y',function(d){
          return labelRadius;
        });

    face.selectAll('.hour-label')
		  .data(d3.range(6,25,6))
  			.enter()
  			.append('text')
  			.attr('class', 'hour-label')
  			.attr('text-anchor','middle')
  			.attr('x',function(d){
  				return -hourLabelRadius*Math.sin(hourScale(d)*radians);
  			})
  			.attr('y',function(d){
  				return hourLabelRadius*Math.cos(hourScale(d)*radians) + hourLabelYOffset;
  			})
  			.text(function(d){
  				return d;
  			});
  }

  render() {
    return (
      <Row className="clock-stack" id="clock-stack">
        <Col md={6}>
          <div className="clock" id="clock">
          </div>
        </Col>
        <Col md={4} mdOffset={1} className="clock-desc">
          <p>
            This component uses D3 (v4) to display times on a 24 hour clock.
          </p>
          <p>
            The lines represent times of button presses on my Amazon IOT developer button. <b>Hover</b> to see the exact time (.1 minute = 6 minutes). When the button is pressed it calls an AWS Lambda function, which triggers an IFTTT webhook to add the button press data to a Google Speadsheet.
          </p>
          <p>
            The component could be used to more visually represent the time of day when any series of events occurred. For example, you could feed in a series of times when a certain person tweets or posts pictures and see those times represented on the 24 hour clock.
          </p>
        </Col>
      </Row>
    )
  }
}
