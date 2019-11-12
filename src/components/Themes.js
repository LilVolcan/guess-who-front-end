import React, { Component } from "react";

export default class Themes extends Component {
    state = {
        themes: [], 
        pickedTheme: ""
    }

  componentDidMount(){
    fetch("http://192.168.128.177:8000/themes")
        .then(resp => resp.json()
        .then(data => this.setState({
            themes: data,
            pickedTheme: data[0].theme_name
        }))
    );
  };

  handleChange = (event) => {
      
      this.setState({
          pickedTheme: event.target.value
      })
  }

  render() {
      console.log(this.state.pickedTheme)
    return (
      <div>
        <p>Pick a theme and get going!</p>
        <select onChange={this.handleChange}>
            <option>XxRedDarknessxX</option>
            {this.state.themes.map(theme => <option key={theme.id}>{theme.theme_name}</option>)}
        </select>
        <button onClick={this.handleClick}>Start Game</button>
      </div>
    );
  }
}
