import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.myFunction = this.myFunction.bind(this);
  }
  
  myFunction(e) {
    alert("The value of counter is " + this.state.counter)
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div class="mb-3">
            <label for="textInput" class="form-label">Enter a sentence(s) and/or paragraph(s)</label>
            <input type="text" class="form-control" id="textInput" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
