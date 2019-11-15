import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";

export default class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://192.168.128.177:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password_digest: this.state.password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.setUser(data)
        localStorage.token = data.data.id
      })
      .catch(err => console.error(err.stack))
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="background">

        
        <Card
          className="text-center"
          border="dark"
          style={{
            float: "right",
            position: "fixed",
            width: "200px",
            padding: "10px",
            left: "800px",
            top: "100px"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </Card>
      </div>
      </div>
    );
  }
}
