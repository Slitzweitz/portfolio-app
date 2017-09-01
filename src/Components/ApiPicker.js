import React, { Component } from 'react';
import {  FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col, Panel } from 'react-bootstrap';
import { apiData } from '../apiData';
import fetch from 'isomorphic-fetch';

const apiUrls = apiData;

class ApiPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'header',
      header: apiUrls.header.titleMain,
      instruction: apiUrls.header.instr,
      noQuery: true,
      curlReq: apiUrls.header.primaryURL,
      reqMethod: apiUrls.header.reqtype,
      query: '',
      queryType: 'text',
      results: '',
      button: 'primary',
      buttonText: 'Submit'
    };
    this.handleApiChange = this.handleApiChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleApiChange(event) {
    var lookup = event.target.value;
    if (!apiUrls[lookup].hideQuery) {
      this.setState({
        noQuery: false
      })
      console.log("show query field")
    } else if (apiUrls[lookup].hideQuery) {
      this.setState({
        noQuery: true
      })
    }
    this.setState({
      ref: event.target.value,
      header: apiUrls[lookup].titleMain,
      instruction: apiUrls[lookup].instr,
      curlReq: apiUrls[lookup].primaryURL,
      reqMethod: apiUrls[lookup].reqtype,
      query: '',
      queryType: apiUrls[lookup].queryType,
      results: '',
      button: 'primary',
      buttonText: 'Submit'
      });
    console.log('picked: ' + event.target.value);
  };

  handleQueryChange(event) {
    this.setState({
        value: event.target.value,
        query: event.target.value
      });
    console.log('updated query to: ' + event.target.value);
  };

  handleSubmit(event) {
    /*
    send req and display json results
    -create a fetch for POST and GET
    -

    // */
    // if (this.state.reqMethod === "POST") {
    //   fetch(this.state.curlReq, {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   })
    //   .then(res => {
    //     const posts = {
    //       res
    //     }
    //     return posts;
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   })
    // } else if (this.state.reqMethod === "GET") {

      // create request w/ queryValue

      fetch('https://cors-anywhere.herokuapp.com/' + this.state.curlReq + this.state.query)
      .then((docs) => docs.json())
      .then((docsJson) => {
        const posts = {
          docsJson
        }
        // NOTE: response from imgsearch API is already an Array
        // special handling for the array:
        if (Array.isArray(docsJson)) {
          // remove outer array
          var data = docsJson[0];
          // turn obj (data) into an array with the entries
          var y = Object.entries(data);
          console.log(y);
          // map out the array into li
          const arrayList = y.map((doc) =>
            <li key={doc.toString()}>{doc[0]}: {doc[1]}</li>
          );
          // update state with printed results
          this.setState({
            results: arrayList,
            button: 'success',
            buttonText: 'Success!'
          })
        }
        else {
          // map out the keys and values into a li
          var x = Object.entries(docsJson);
          const listItems = x.map((doc) =>
            <li key={doc.toString()}>{doc[0]}: {doc[1]}</li>
          );
          // update state with printed results
          this.setState({
            results: listItems,
            button: 'success',
            buttonText: 'Success!'
          })
        }
      })
      .catch(err => {
        console.error(err);
        // update state with printed results
        this.setState({
          button: 'danger',
          buttonText: 'Error :('
        })
      });
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} type={this.state.encodeType} method={this.state.reqMethod}>
      <Grid>
        <Row>
          <Col md={6} mdOffset={2}>
            <FormGroup>
                <FormControl componentClass="select" value={this.state.ref} onChange={this.handleApiChange} className="api-dropdown">
                  <option value="header">Header Parser</option>
                  <option value="shortener">Url Shortener</option>
                  <option value="image">Image Metadata Search</option>
                  <option value="timestamp">Timestamper</option>
                  <option value="sizer">File Sizer</option>
                </FormControl>
            </FormGroup>
            </Col>
            <Col md={2}>
            <Button type="submit" bsSize="large" bsStyle={this.state.button}>
              {this.state.buttonText}
            </Button>
          </Col>
        </Row>
        <Row className="skill-instruction-split">
          <Col md={4} mdOffset={2}>
            <Panel bsStyle="success" header={this.state.header} className="skills-sandbox">
              {this.state.instruction}
            </Panel>
          </Col>
          <Col md={4}>
            <Panel header="Instructions" className="instruction-sandbox">
              {this.state.instruction}
              <FormGroup controlId="formQuery" hidden={this.state.noQuery}>
              <ControlLabel>Query:</ControlLabel>
              <FormControl type={this.state.queryType} value={this.state.query} onChange={this.handleQueryChange} />
              </FormGroup>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>

              <Panel className="response-landing">Response:
                <ul>
                  {this.state.results}
                </ul>
              </Panel>

          </Col>
        </Row>
        </Grid>
      </form>
    );
  }
}

export default ApiPicker;

//
// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }
//
// class QueryBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: apiUrls.header.displayQuery
//     }
//   }
//   render() {
//     return (
//       <form>
//         <FieldGroup
//           id="theQuery"
//           type="text"
//           label="Query"
//           placeholder="Enter query"
//         />
//       </form>
//     )
//   }
// }
// console.log(unixcalc(Date.now()));
// let unixcalc = (d) => { Math.floor(d / 1000) }
