import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default class Login extends Component {
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
    fetch("http://192.168.128.177:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.props.setUser(data)
        localStorage.token = data.data.id
      })
      .catch(error => alert("Invalid Login.  Please try Again!"))
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

        {/* </div> */}
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
            // margin: "50px"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="username"
                placeholder="username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={this.handleChange}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
        </div>
      </div>
    );
  }
}
