import React, { Component } from "react";

export default class Message extends Component {
  render() {
      console.log(this.props)
    return (
      <div >
        <p>
          {this.props.username}: {this.props.message} 
        </p>
      </div>
    );
  }
}
