import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

export default class ShowCard extends Component {
  render() {
    // console.log(this.props.card)
    const { id, img_url, name,hidden } = this.props.card; 
    // const {hidden} = this.props.card // if hidden is true, hide card
    return (
      <div>
        <Col lg={2} >
          <Card
            onClick={() => this.props.handleClick(this.props.card)}
            className="text-center"
            border="dark"
            style={{ width: "175px", padding: '10px', margin:"10px" }  }
          >
            <Card.Img style={{height: "150px"}} variant="top" src={!hidden ? img_url : 'https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3_400x400.png'} />
            <Card.Body style={{}}>
              <Card.Title style={{fontFamily: 'Luckiest Guy', fontSize: "14px"}} >{name}</Card.Title>
            </Card.Body>
            <Button size='sm'>Guess?</Button>
          </Card>
        </Col>
      </div>
    );
  }
}
