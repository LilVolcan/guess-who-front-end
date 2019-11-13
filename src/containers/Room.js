import React, { Component } from "react";
import GameRoom from '../components/GameRoom'

export default class Room extends Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    fetch("http://192.168.128.177:8000/games")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          rooms: data
        })
      );
      
  }

  renderRoom() {
      console.log(this.props)
    return this.state.rooms.map(room => <GameRoom room={room} {...this.props} />);
  }
  render() {
    return <div>{this.renderRoom()}</div>;
  }
}
