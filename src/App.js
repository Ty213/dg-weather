import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <h1>Is it a good day for Disc golf?</h1>
        <div className="dg-weather">
        </div>
      </div>
    );
  }
}


axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=08083,us&APPID=${API_KEY}`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

console.log(API_KEY);
export default App;
