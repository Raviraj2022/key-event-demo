import React, { Component } from "react";

export default class KeyDetector extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "", code: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ key: e.key, code: e.code });
  }
  render() {
    return (
      <div>
        <h2>Key Detector</h2>
        <h3>
          key:{this.state.key},code:{this.state.code}
        </h3>
        <input
          type="text"
          placeholder="Type Here"
          onKeyDown={this.handleClick}
        />
      </div>
    );
  }
}
