import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

export default class ShowCard extends Component {

  handleClick = (id) =>{
    fetch(`http://192.168.128.177:8000/games/${this.props.gameid}/${this.props.user}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user,
        game_id: this.props.gameid,
        card_id: id
      })
    })
    .then(resp => resp.json())
    .then(data => this.props.handleMessage(data))
  }



  render() {
    // console.log(this.props.card)
    const { id, img_url, name, hidden } = this.props.card;
    // const {hidden} = this.props.card // if hidden is true, hide card
    

    return (
      <div>
        <Col lg={2}>
          <Card
            style={{}}
            onClick={() => this.props.handleClick(this.props.card)}
            className="text-center"
            border="dark"
            style={{ height: "210px", width: "175px", margin: "10px" }}
          >
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src={
                !hidden
                  ? img_url
                  : "https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3_400x400.png"
              }
            />
            <Card.Body style={{ margin: "0px", padding: "0px" }}>
              <Card.Title
                style={{ fontFamily: "Luckiest Guy", fontSize: "14px" }}
              >
                {name}
              </Card.Title>
            </Card.Body>
            <Button onClick={() => this.handleClick(id)} size="sm">Guess?</Button>
          </Card>
        </Col>
      </div>
    );
  }
}
