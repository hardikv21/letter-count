import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      char: "",
      median: 0,
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeChar = this.handleChangeChar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeText(event) {
    this.setState(
      {
        text: event.target.value.toLowerCase(),
        median: 0,
      }
    );
  }

  handleChangeChar(event) {
    this.setState(
      {
        char: event.target.value.toLowerCase(),
        median: 0,
      }
    );
  }

  handleSubmit() {
    const sentences = this.state.text.split(". ");
    const countCharArr = [];
    sentences.forEach(
      (sentence) => countCharArr.push(sentence.split(" ").filter((word) => word.includes(this.state.char)).length),
    );
    countCharArr.sort();
    let median = 0;
    if (countCharArr.length === 1) {
      // pass
    }
    else if (countCharArr.length % 2 === 0) {
      median = (countCharArr.length / 2) - 1;
    }
    else {
      median = (countCharArr.length - 1) / 2;
    }
    this.setState(
      {
        median: countCharArr[median],
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div class="mb-3">
          <label
            for="textInput"
            class="form-label"
          >Enter a sentence(s) and/or paragraph(s)</label>
          <input
            type="text"
            class="form-control"
            id="textInput"
            onChange={this.handleChangeText}
          />
        </div>
        <div class="mb-3">
          <label
            for="charInput"
            class="form-label"
          >Enter only single character</label>
          <input
            type="text"
            class="form-control"
            id="charInput"
            onChange={this.handleChangeChar}
            maxLength={1}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Median: {this.state.median}</label>
        </div>
        <button
          class="btn btn-primary"
          disabled={!this.state.text || !this.state.char}
          onClick={this.handleSubmit}
        >Submit</button>
      </div>
    );
  }
}
