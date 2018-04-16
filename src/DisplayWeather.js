import React, { Component } from 'react';

class DisplayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {weather: null};

      }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("This is next props", nextProps.weather);
        var goodDay = false;
        if(nextProps.weather !== null){

            console.log(nextProps.weather.weather[0].id);


        }
        return {
            weather: nextProps.weather
        }
      }

  render() {
      console.log("Current state:", this.state.weather);
      if(this.state.weather == null) {
          console.log("if ran");
          return (
            <div className="weather__wrapper">
            <div>nullio</div>
            </div>
          );
    }else {
        console.log("else ran");
        return (
            <div className="weather__wrapper">
            <div>{this.state.weather.weather[0].main}</div>
            </div>
          );
    }

  }
}

export default DisplayWeather;