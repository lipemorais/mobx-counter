import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

class App extends Component {
  myState = observable({ counter: 0 });

  increment = () => {
    this.myState.counter++;
  };

  decrement = () => {
    this.myState.counter--;
  };

  render() {
    const myStyle = {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    };

    return (
      <div style={myStyle}>
        <span>{this.myState.counter}</span>
        <div>
          <button onClick={this.decrement}>decrementar</button>
          <button onClick={this.increment}>incrementar</button>
        </div>
      </div>
    );
  }
}

export default observer(App);
