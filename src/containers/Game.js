import React, { Component } from "react";
import CardContainer from "./CardContainer";


export default class Game extends Component {

  render() {
    return (
      <div>
        
        <CardContainer
          {...this.props}
        />
      </div>
    );
  }
}
