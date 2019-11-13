import React, { Component } from "react";
import CardContainer from "./CardContainer";

export default class Game extends Component {
  state = {
    selectedCard: null
  };

  // componentDidUpdate() {
  //   if (!this.state.pickedTheme) {
  //     console.log("hello?")
  //     fetch(`http://192.168.128.177:8000/cards/${this.props.pickedTheme}`)
  //       .then(resp => resp.json())
  //       .then(data => {
  //         let hashmap = {};
  //         data.map(card => (hashmap[card.id] = card));
  //         this.setState({
  //           cards: hashmap,
  //           pickedTheme: this.props.pickedTheme
  //         });
  //       });
  //     // fetch("http://192.168.128.177:8000/cards")
  //     //   .then(resp => resp.json())
  //     //   .then(data => {
  //     //     // console.log(data.data)
  //     //     let hashmap = {};
  //     //     data.data.map(card => (hashmap[card.id] = card));
  //     //     this.setState({
  //     //       cards: hashmap
  //     //     });
  //     //   });
  //   }
  // }

  // handleClick = card => {
  //   if (this.state.selectedCard !== null) {
  //     let updatedCard = { ...card, hidden: true };
  //     this.setState({
  //       cards: { ...this.state.cards, [card.id]: updatedCard }
  //     });
  //   } else {
  //     // fetch(`http://192.168.128.176:8000/games/${this.props.gameid}`,{
  //     //     method: "PATCH",
  //     //     headers: {
  //     //         "Content-Type": "application/json",
  //     //         Accept: 'application/json'
  //     //     },
  //     //     body: JSON.stringify({
  //     //         player1_id: this.state.selectedCard
  //     //     })
  //     // })
  //     // console.log(card.id);
  //     this.setState({
  //       selectedCard: card.id
  //     });
  //   }
  // };

  render() {
    return (
      <div>
        <CardContainer
          handleClick={this.props.handleClick}
          cards={this.props.cards}
        />
      </div>
    );
  }
}
