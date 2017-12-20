/** Coordinate component

    Get coordinates and pass them to child component (<Weather {...}/>)

**/
import React, { Component } from 'react';
import Weather from './Weather.jsx';

class Coords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      tempC: "",
      clouds: "",
      wind: "",
      lat: "",
      lon: "",
      url: ""
    };
  }
  // Define function that sets state with latitude and longitude

  componentDidMount() {

    let getLocation = (position) => {
      var sliceLat= position.coords.latitude.toFixed(2);
      var sliceLon= position.coords.longitude.toFixed(2);
      var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + sliceLat + "&lon="+ sliceLon + "&appid=06fa8726f51bc5310311a7038630653d";

      // store lat and long in state
      this.setState({
        lat: sliceLat,
        lon: sliceLon,
        url: url
      }, () => {
        fetch(this.state.url, { method: "GET" })
        .then((doc) => doc.json())
        .then((respJson) => {
          var f = (respJson.main.temp - 273.18) * 1.8 + 32;
          f = f.toFixed(1);
          var c = (respJson.main.temp - 273.18).toFixed(1);
          this.setState({
            temp: f + " Degrees",
            tempC: c + " Degrees Celsius",
            clouds: respJson.weather[0].description,
            wind: "Wind: " + respJson.wind.speed + " MPH"
          })
          console.log(this.state.tempC);
        })
        .catch(err => {
          console.log(err.message);
        });
      });
    }
    navigator.geolocation.getCurrentPosition(getLocation);
    // this.setState(getCoords);
  }

  render() {
    return (
        <Weather url={this.state.url} lat={this.state.lat} lon={this.state.lon} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind} />
    )
  }
}

export default Coords;
