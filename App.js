import React, { Component } from 'react';
import WordCard from './WordCard';
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="SAKKARIN" />
      </div>
    );
  }
}
  export default App;