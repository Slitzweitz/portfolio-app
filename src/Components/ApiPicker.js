import React, { Component } from 'react';
import {  FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { apiData } from '../apiData';
import fetch from 'isomorphic-fetch';

const apiUrls = apiData;

class ApiPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'header',
      instruction: apiUrls.header.instr,
      noQuery: true,
      curlReq: apiUrls.header.primaryURL,
      reqMethod: apiUrls.header.reqtype,
      query: '',
      results: ''
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
      instruction: apiUrls[lookup].instr,
      curlReq: apiUrls[lookup].primaryURL,
      reqMethod: apiUrls[lookup].reqtype,
      query: '',
      results: ''
      });
    console.log('picked: ' + event.target.value);
  };

  handleQueryChange(event) {
    this.setState({
        value: event.target.value,
        query: event.target.value
      });
    console.log('updated query to: ' + event.target.value)
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
        // update state here and insert response
        // react cannot render an object,
        // so need to map out the keys and values ?into a code element?
        var x = Object.entries(docsJson);

        const listItems = x.map((doc) =>
          <li key={doc.toString()}>{doc[0]}: {doc[1]}</li>
        );
        this.setState({
          results: listItems
        })
      })
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} type={this.state.encodeType} method={this.state.reqMethod}>
        <FormGroup>
          <ControlLabel>Select API:</ControlLabel>
          <FormControl componentClass="select" value={this.state.ref} onChange={this.handleApiChange}>
            <option value="header">Header Parser</option>
            <option value="shortener">Url Shortener</option>
            <option value="image">Image Metadata Search</option>
            <option value="timestamp">Timestamper</option>
            <option value="sizer">File Sizer</option>
          </FormControl>
        </FormGroup>
        <FormGroup readOnly>
        <ControlLabel>Instructions:</ControlLabel>
        <FormControl.Static>
          {this.state.instruction}
        </FormControl.Static>
        </FormGroup>
        <FormGroup controlId="formQuery" hidden={this.state.noQuery}>
          <ControlLabel>Query:</ControlLabel>
          <FormControl type="text" value={this.state.query} onChange={this.handleQueryChange} />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
        <div className="response-landing">
          <ul>
            {this.state.results}
          </ul>
        </div>
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
