import React, { Component } from 'react';

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        this.nameInput.focus(); 
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

  render() {
    return (
      <div className="zip__wrapper">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} placeholder="Enter your Zip code"
             className="zip__input" 
             ref={(input) => { this.nameInput = input; }}
             onChange={this.handleChange} />
            <input className="zip__button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Zip;