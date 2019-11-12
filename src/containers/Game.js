import React, { Component } from 'react';
import CardContainer from './CardContainer';

export default class Game extends Component {
    state = {
        cards: {},

    }

    componentDidMount(){
        fetch('http://192.168.128.177:8000/cards')
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.data)
            let hashmap = {};
            data.data.map(card => hashmap[card.id] = card)
            this.setState({
                cards: hashmap
            })
        })
    }

    handleClick = (card) => {
        let updatedCard = {...card, hidden: true }
        this.setState({
            cards: {...this.state.cards, [card.id]:updatedCard}
        })
    }

    render() {
        console.log(this.state.cards)
        return (
            <div>
              <CardContainer handleClick={this.handleClick} cards={this.state.cards} />  
            </div>
        )
    }
}
