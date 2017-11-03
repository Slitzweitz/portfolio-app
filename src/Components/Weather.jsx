// This component will have the results of fetch call passed to it as a prop.
// It will use WillReceiveProps to set state when the payload comes through
//  to props of display component
import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      clouds: "",
      wind: props.wind,
      icon: "",
      lat: props.lat,
      lon: props.lon,
      url: props.url
    };
    console.log(this.state.url);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      temp: nextProps.temp,
      wind: nextProps.wind,
      clouds: nextProps.clouds
    });
  }

  render() {
    return (
      <div className="weather-wrapper">
        <div className="temp">
          {this.state.temp}
        </div>
        <div className="clouds">
          {this.state.clouds}
        </div>
        <div className="wind">
          {this.state.wind}
        </div>
      </div>
    )
  }
}

export default Weather;
