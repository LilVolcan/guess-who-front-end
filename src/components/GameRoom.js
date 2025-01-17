import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class GameRoom extends Component {
  handleClick = id => {
    fetch(`http://localhost:3000/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        player2_id: localStorage.token
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.setPlayer(id, data.theme_id);
      });
  };

  render() {
    const { id } = this.props.room;
    return (
      <div>
        <Card
          onClick={() => this.handleClick(id)}
          className="text-center"
          border="dark"
          style={{ width: "175px", padding: "10px", margin: "10px" }}
        >
          <Card.Body style={{ height: "5px", padding: "10px" }}>
            <Card.Title
              style={{ fontFamily: "Luckiest Guy", fontSize: "12px" }}
            >
              {id}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
