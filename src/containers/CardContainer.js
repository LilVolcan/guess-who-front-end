import React, { Component } from "react";
import ShowCard from "../components/ShowCard";
import { Row, Col } from "react-bootstrap";

export default class CardContainer extends Component {
  renderCards() {
    let keys = Object.keys(this.props.cards);
    return keys.map(key => (
      <ShowCard
        handleClick={this.props.handleClick}
        key={key}
        card={this.props.cards[key]}
      />
    ));
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Col sm={10}>
          <Row md={4} className="">
            {this.renderCards()}
          </Row>
        </Col>
        <Col sm={2}>
        </Col>
      </div>
    );
  }
}
