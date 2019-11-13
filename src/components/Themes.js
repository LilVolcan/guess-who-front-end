import React, { Component } from "react";
import { thisExpression } from "@babel/types";

export default class Themes extends Component {
  state = {
    themes: [],

  };

  componentDidMount() {
    fetch("http://192.168.128.177:8000/themes").then(resp =>
      resp.json().then(data =>
        this.setState({
          themes: data
        })
      )
    );
  }


  handleClick = () => {
    fetch("http://192.168.128.177:8000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        theme_id: this.props.pickedTheme,
        player1_id: this.props.user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        this.props.setGame(data);
        if (data.id) {
          this.props.history.push(`/game/${data.id}`);
        } else {
          alert("You either Haven't Logged in or havent choosen your theme");
        }
      });
  };

  render() {
    // console.log(this.props.history);
    return (
      <div>
        <p>Pick a theme and get going!</p>
        <select onChange={this.props.changeTheme}>
          <option>Please select Theme</option>
          {this.state.themes.map(theme => (
            <option key={theme.id} value={theme.id}>
              {theme.theme_name}
            </option>
          ))}
        </select>
        <button onClick={this.handleClick}>Start Game</button>
      </div>
    );
  }
}
