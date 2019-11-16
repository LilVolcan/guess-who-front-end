import React, { Component } from "react";
import Themes from "../components/Themes";
import Instructions from "../components/Instructions";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="theme-container">
          <Themes {...this.props} />
        </div>
        <div className="instr-container">
          <h3>Instructions:</h3>
          <Instructions />
        </div>
      </div>
    );
  }
}
