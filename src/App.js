import React, { Component } from "react";
import "./App.css";
import DateParser from "./DateParser";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h4>Coronavirus (COVID-19)</h4>
        </header>

        <DateParser />
      </div>
    );
  }
}

export default App;
