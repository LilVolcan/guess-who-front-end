import React, { Component } from "react";
import { thisExpression } from "@babel/types";

export default class Themes extends Component {
  state = {
    themes: [],
    pickedTheme: null
  };

  componentDidMount() {
    fetch("http://192.168.128.177:8000/themes").then(resp =>
      resp.json().then(data =>
        this.setState({
          themes: data,
          pickedTheme: data[0].id
        })
      )
    );
  }

  handleChange = event => {
    this.setState({
      pickedTheme: event.target.children[1].dataset.id
    });
  };

  handleClick = () => {
    fetch("http://192.168.128.177:8000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        theme_id: this.state.pickedTheme,
        player1_id: this.props.user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.props.setGame(data);
        if (data.id) {
          this.props.history.push(`/game/${data.id}`);
        } else {
          alert("You either Havent Logged in or havent choosen your theme");
        }
      });
  };

  render() {
    console.log(this.props.history);
    return (
      <div>
        <p>Pick a theme and get going!</p>
        <select onChange={this.handleChange}>
          <option>XxRedDarknessxX</option>
          {this.state.themes.map(theme => (
            <option key={theme.id} data-id={theme.id}>
              {theme.theme_name}
            </option>
          ))}
        </select>
        <button onClick={this.handleClick}>Start Game</button>
      </div>
    );
  }
}
