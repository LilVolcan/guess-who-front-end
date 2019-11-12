import React, { Component } from "react";
import ShowCard from "../components/ShowCard";
import { Row } from "react-bootstrap";

export default class CardContainer extends Component {
  renderCards() {
    let keys = Object.keys(this.props.cards);
    return keys.map(key => <ShowCard handleClick={this.props.handleClick} key={key} card={this.props.cards[key]} />)
  }


  render() {
    return (
      <div style={{margin: "10px"}}>
        <Row className="show-grid">
              {this.renderCards()}            
        </Row>
        
      </div>
    );
  }
}
