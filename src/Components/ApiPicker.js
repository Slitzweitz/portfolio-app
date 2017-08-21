import React, { Component } from 'react';
import {  FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

const apiUrls = {
  header: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://aqueous-plains-86069.herokuapp.com/app/whoami",
    instr: "Sends back IP address and location of that IP. No params needed.",
    hideQuery: true
  },
  shortener: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://blooming-cove-78461.herokuapp.com/",
    instr: "Enter a valid url, get a permalink (e.g. https://blooming-cove-78461.herokuapp.com/1234)",
    queryDesc: "Enter a valid URL"
  },
  image: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://heather-glockenspiel.glitch.me/img/",
    AltURL: "https://heather-glockenspiel.glitch.me/img/recent/",
    instr: "Enter one or more search terms, separated by spaces. Use /recent/ to path to see recent searches",
    queryDesc: "Enter a search term"
  },
  timestamp: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://peaceful-mesa-30915.herokuapp.com",
    instr: "Either send current Unix time in seconds as param and get the natrual date, or vice versa",
    queryDesc: "Enter Unix Time or Natural Date"
  },
  sizer: {
    reqtype: "POST",
    encType: "multipart/form-data",
    primaryURL:  "https://uncovered-ocean.glitch.me/dreams",
    instr: "Upload a file of FormData object and get the size in bytes. Not stored in a db.",
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class QueryBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: apiUrls.header.displayQuery
    }
  }
  render() {
    return (
      <form>
        <FieldGroup
          id="theQuery"
          type="text"
          label="Query"
          placeholder="Enter query"
        />
      </form>
    )
  }
}

class ApiPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'header',
      instruction: apiUrls.header.instr,
      noQuery: true,
      curlReq: apiUrls.header.primaryURL,
      reqMethod: apiUrls.header.reqtype
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
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
      instruction: apiUrls[lookup].instr
    });
    console.log('picked: ' + event.target.value);
    // write cases for each. based on which picked, display basic instructions and sample code for curl query
    // <code>curl {this.state.value}</code>
  }

  handleSubmit(event) {
    console.log('submitted: ' + this.state.ref, this.state.instruction);
    // send req and display json results
    event.preventDefault();
  }

//  remember, the value of the SELECT element is what is being modified
  render() {
    return (
      <form onSubmit={this.handleSubmit} type={this.state.encodeType} method={this.state.reqMethod}>
        <FormGroup>
          <ControlLabel>Select API:</ControlLabel>
          <FormControl componentClass="select" value={this.state.ref} onChange={this.handleChange}>
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
        <FormGroup hidden={this.state.noQuery}>
          <ControlLabel>Query:</ControlLabel>
          <FormControl type="text" placeholder="query goes here" />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default ApiPicker;
