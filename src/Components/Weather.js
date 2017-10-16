// Weather component
import React, { Component } from 'react';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      clouds: "",
      wind: "",
      icon: "",
      lat: "",
      lon: ""
    };
    // this.showPosition = this.showPosition.bind(this);
  }

  getCoords() {
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      // openweather api will only take 2 decimal places,
      // even if given 3 or more
      var sliceLat= position.coords.latitude.toFixed(2);
      var sliceLon= position.coords.longitude.toFixed(2);
      // store lat and long in state
      this.setState({
        lat: sliceLat,
        lon: sliceLon
      })
    }
  }

  componentDidMount() {
    // getCoords();
      // build api url
      var weatherApiCoordUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon="+ this.state.lon +"&appid=06fa8726f51bc5310311a7038630653d";

      fetch(weatherApiCoordUrl, { method: "GET" })
      .then((doc) => doc.json())
      .then((respJson) => {
        console.log(respJson);
        this.setState({
          temp: respJson.main.temp,
          clouds: respJson.weather[0].description,
          wind: respJson.wind.speed
        })
      })
      .catch(err => {
        console.log(err.message);
      });
    }

  render() {
    return (
      <div className="weather">
        <div className="temp">
          {this.state.temp}
        </div>
        <div>
          {this.state.clouds}
        </div>
        <div>
          {this.state.wind}
        </div>
      </div>
    )
  }
}

export default Weather;
