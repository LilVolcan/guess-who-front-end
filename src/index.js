import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";
import ActionCable from "actioncable";

// const cable = ActionCable.createConsumer("ws://192.168.128.177:8000/cable");
// console.log(cable);


// </ActionCableProvider>,

ReactDOM.render(
  <ActionCableProvider url="ws://192.168.128.177:8000/cable">
      <Router>
        <Route path= "/" component={App}></Route>
      </Router>
      </ActionCableProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
