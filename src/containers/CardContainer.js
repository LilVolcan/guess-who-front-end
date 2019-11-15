import React, { Component } from "react";
import ShowCard from "../components/ShowCard";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ActionCableConsumer } from "react-actioncable-provider";
import Message from '../components/Message'

export default class CardContainer extends Component {
  state = {
    question: "",
    messages: []
  };
  renderCards() {
    let keys = Object.keys(this.props.cards);
    return keys.map((key, index) => {
      return (
        <ShowCard
          {...this.props}
          handleClick={this.props.handleClick}
          key={key}
          card={this.props.cards[key]}
          handleMessage ={this.handleMessage}
        />
      );
    });
  }

  handleClick = event => {
    event.preventDefault();
    console.log(this.props.username)
    fetch("http://192.168.128.177:8000/games/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.props.username,
        message: this.state.question
      })
    });
  };

  handleChange = event => {
    this.setState({
      question: event.target.value
    });
  };

  handleMessage = (data) =>{
    // console.log("this is from recieved", message)
    console.log(data)
    this.setState({
      messages: [...this.state.messages, data ]
    })

  }

  renderMessage(){
    return this.state.messages.map( (message,index) => <Message key={index}{...message} />)
  }

  render() {
    console.log(this.state.messages)
    let card = {
      id: null,
      img_url:
        "https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3_400x400.png",
      name: "choose your card"
    };
    return (
      <div className="grid" style={{ margin: "10px", display: "flex" }}>
        <ActionCableConsumer channel="QuestionChannel" onReceived={(message)=> this.handleMessage(message)}>
          <Col sm={10}>
            <Row md={4}>{this.renderCards()}</Row>
          </Col>
          <Col sm={2}>
            <ShowCard
              handleClick={null}
              key={this.props.selectedCard}
              card={
                this.props.selectedCard
                  ? this.props.cards[this.props.selectedCard]
                  : card
              }
            />
            <Form onSubmit={this.handleClick}>
              <Form.Group>
                <Form.Label>Question</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  name="question"
                  value={this.state.question}
                  placeholder="question?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
            <div>
              {this.renderMessage()}
            </div>
          </Col>
        </ActionCableConsumer>
      </div>
    );
  }
}
