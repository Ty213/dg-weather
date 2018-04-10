import React, { Component } from 'react';
import axios from 'axios';

import Zip from './Zip'
import './App.css';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {

    }
  }

  getWeather(zip) {
    console.log("This is coming from app component", zip);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${API_KEY}`)
      .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
          console.log(error);
      });
  }

  
  render() {
    return (
      <div className="App">
        <h1>IS IT A GOOD DAY FOR DISC GOLF?</h1>
        <div className="dg-weather">
        <Zip getWeather={this.getWeather.bind(this)}/>
        </div>
      </div>
    );
  }
}


export default App;
