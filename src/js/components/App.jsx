import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./Input.jsx";
import "../../styles/general.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div id="app">
        <Input label="Input label"
          type="text"
          value={inputValue}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

var domContainer = document.getElementById('app');
ReactDOM.render(<App />, domContainer)