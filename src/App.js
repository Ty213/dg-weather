import React, { Component } from 'react';
import axios from 'axios';

import DisplayWeather from './DisplayWeather';
import Zip from './Zip';
import './App.css';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);
    this.state = {
      weather: null
    }
  }

  setWeather(weather) {
    this.setState({weather})
  }
  
  getWeather(zip) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${API_KEY}`)
      .then((response) => this.setWeather(response.data))
      .catch(function (error) {
          console.log(error);
      });
  }
  
  render() {
    return (
      <div className="App">
        <h1>IS IT A GOOD DAY FOR DISC GOLF?</h1>
        <div className="dg-weather">
        <DisplayWeather weather={this.state.weather} />
        <Zip getWeather={this.getWeather.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
