import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export default class ShowCard extends Component {
  render() {
    // console.log(this.props.card)
    const { id, img_url, name } = this.props.card.attributes; 
    const {hidden} = this.props.card // if hidden is true, hide card
    return (
      <div>
        <Col lg={1.5} >
          <Card
            onClick={() => this.props.handleClick(this.props.card)}
            className="text-center"
            border="dark"
            style={{ width: "175px", padding: '10px', margin:"10px" }  }
          >
            <Card.Img style={{height: "150px"}} variant="top" src={img_url} />
            <Card.Body style={{height: "5px", padding: "10px"}}>
              <Card.Title style={{fontFamily: 'Luckiest Guy', fontSize: "12px"}} >{name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
