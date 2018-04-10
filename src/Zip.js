import React, { Component } from 'react';

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        this.zipInput.focus(); 
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state.value);
        this.props.getWeather(this.state.value);
        event.preventDefault();
      }

  render() {
    return (
      <div className="zip__wrapper">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} placeholder="Enter your Zip code"
             className="zip__input" 
             ref={(input) => { this.zipInput = input; }}
             onChange={this.handleChange} />
            <input className="zip__button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Zip;