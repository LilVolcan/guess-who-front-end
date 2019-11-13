import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Home from "./containers/Home";
import Game from "./containers/Game";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

export default class App extends React.Component {
  state = {
    user: "",
    gameid: null
  };

  setUser = data => {
    this.setState(
      {
        user: data.data.id
      },
      () => {
        data.data.attributes.username
          ? this.props.history.push("/home")
          : this.props.history.push("/login");
      }
    );
  };

  setGame = data => {
    console.log(data);
    this.setState({});
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/login"
            render={routerProps => (
              <Login {...routerProps} setUser={this.setUser} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={routerProps => (
              <Signup {...routerProps} setUser={this.setUser} />
            )}
          />
          <Route
            exact
            path="/game/:gameid"
            render={routerProps => <Game gameid={this.state.gameid} />}
          />
          <Route
            exact
            path="/home"
            render={routerProps => (
              <Home
                {...routerProps}
                user={this.state.user}
                setGame={this.setGame}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
