import React, { Component } from "react";

export default class Themes extends Component {
  state = {
    themes: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/themes").then(resp =>
      resp.json().then(data =>
        this.setState({
          themes: data
        })
      )
    );
  }

  handleClick = () => {
    fetch("http://localhost:3000/games", {
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
        this.props.setGame(data);
        if (data.id) {
          this.props.history.push(`/game/${data.id}`);
        } else {
          alert("You either Haven't Logged in or havent choosen your theme");
        }
      });
  };

  render() {
    return (
      <div>
        <h1>Pick a theme and get going!</h1>
        <select onChange={this.props.changeTheme}>
          <option>Please select Theme</option>
          {this.state.themes.map(theme => (
            <option key={theme.id} value={theme.id}>
              {theme.theme_name}
            </option>
          ))}
        </select>
        <button className="theme-button" onClick={this.handleClick}>
          Start Game
        </button>
      </div>
    );
  }
}
