import React, { Component } from "react";
import Themes from '../components/Themes';
import Instructions from '../components/Instructions';

export default class Home extends Component {

  
  render() {
    // console.log(this.props)
    return (
      <div className="home-page">
        {/* <h1>Welcome to Guess Who Dat?</h1> */}
        <div className="theme-container">
          <Themes {...this.props}/>
        </div>
        <div className="instr-container">
          <h3>Instructions:</h3>
          <Instructions />
        </div>
        
      </div>
    );
  }
}
