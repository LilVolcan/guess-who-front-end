import React, { Component } from 'react'

export default class Instructions extends Component {
    render() {
        return (
            <div>
                <p> Each player's game board has 24 faces.  Start by clicking on one of the cards to choose your character. This card represents the character your opponent has to guess and the character you have to answer questions about.
The youngest player goes first, beginning by asking the other player a characteristic found on one of their 24 visible characters (both players have the same 24 tiles). Example: “Does your character have brown hair?”
If they say, “yes,” the asking player flips over all of the characters without brown hair. If they say, “no,” the asking player flips over the characters that have brown hair. Through the process of elimination, players will eventually be able to “guess” the name of the opponents character.</p>
            </div>
        )
    }
}
