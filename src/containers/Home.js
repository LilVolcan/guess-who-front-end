import React, { Component } from "react";
import Themes from '../components/Themes';
import Instructions from '../components/Instructions';

export default class Home extends Component {

  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to Guess Who Dat?</h1>
        <Themes user={this.props.user} {...this.props}/>
        <Instructions />
      </div>
    );
  }
}
