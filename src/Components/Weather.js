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
    this.getCoords = this.getCoords.bind(this);
  }

  // Define function that sets state with latitude and longitude
  getCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      var sliceLat= position.coords.latitude.toFixed(2);
      var sliceLon= position.coords.longitude.toFixed(2);
      // store lat and long in state
      console.log("setting state now")
      this.setState({
        lat: sliceLat,
        lon: sliceLon
      });
    });
  }

// Call the coordinates function before the component renders,
// HOWEVER, this will not re-render the component
  componentWillMount() {
    console.log("state:" + this.state.lat)
  }

// after the component renders, fetch the data with
  componentDidMount() {
    this.getCoords();
  //     // build api url
    console.log("lat2: " + this.state.lon, "long2:" + this.state.lat)
    // var weatherApiCoordUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon="+ this.state.lon +"&appid=06fa8726f51bc5310311a7038630653d";

    // fetch(weatherApiCoordUrl, { method: "GET" })
    // .then((doc) => doc.json())
    // .then((respJson) => {
    //   console.log(respJson);
    //   this.setState({
    //     temp: respJson.main.temp,
    //     clouds: respJson.weather[0].description,
    //     wind: respJson.wind.speed
    //   })
    // })
    // .catch(err => {
    //   console.log(err.message);
    // });
}


  render() {
    return (
      <div className="weather">
        <div className="coords">
          <p>Latitude: {this.state.lat}, Longitude: {this.state.lon}</p>
        </div>
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
