import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Home from "./containers/Home";
import Game from "./containers/Game";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Room from "./containers/Room";

export default class App extends React.Component {
  state = {
    user: "",
    gameid: null,
    pickedTheme: 0,
    selectedCard: null,
    notOne: false,
    cards: {}
  };
  componentDidMount() {
    if (localStorage.token) {
      fetch(`http://192.168.128.177:8000/users/${localStorage.token}`)
        .then(resp => resp.json())
        .then(data => this.setState({
          user: data.id
        }));
    }
  }
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

  handleClickCard = card => {
    if (this.state.selectedCard !== null) {
      let updatedCard = { ...card, hidden: true };
      this.setState({
        cards: { ...this.state.cards, [card.id]: updatedCard }
      });
    } else {
      this.setState({
        selectedCard: card.id
      });
      let curObj = {}
      if(this.state.notOne){
        curObj = {p2card_id: card.id}
      }else{
        curObj = {p1card_id: card.id}
      }
      fetch(`http://192.168.128.177:8000/games/${this.state.gameid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(curObj)
      })
        .then(resp => resp.json())
        .then(data => console.log(data));
    }
  };

  handleChangeTheme = event => {
    console.log("picked theme:", this.state.pickedTheme);
    this.setState({
      pickedTheme: event.target.value
    });
    console.log("pickedTheme2: ", this.state.pickedTheme);
    fetch(`http://192.168.128.177:8000/cards/${event.target.value}`)
      .then(resp => resp.json())
      .then(data => {
        let hashmap = {};
        data.map(card => (hashmap[card.id] = card));
        this.setState({
          cards: hashmap
        });
      });
  };

  setGame = data => {
    console.log(data);
    this.setState({
      gameid: data.id
    });
  };

  setPlayer = (id, theme_id) =>{
    
    fetch(`http://192.168.128.177:8000/cards/${theme_id}`)
      .then(resp => resp.json())
      .then(data => {
        let hashmap = {};
        data.map(card => (hashmap[card.id] = card));
        this.setState({
          cards: hashmap
        });
      });
      this.setState({
        notOne: true,
        gameid: id
      }, this.props.history.push(`/game/${id}`))
  }

  render() {
    console.log(this.state.notOne);
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
            render={routerProps => (
              <Game {...this.state} handleClick={this.handleClickCard} />
            )}
          />
          <Route
            exact
            path="/home"
            render={routerProps => (
              <Home
                {...routerProps}
                {...this.state}
                setGame={this.setGame}
                changeTheme={this.handleChangeTheme}
              />
            )}
          />
          <Route
            exact
            path="/room"
            render={routerProps => <Room {...this.state} setPlayer={this.setPlayer} />}
          />
        </Switch>
      </div>
    );
  }
}
