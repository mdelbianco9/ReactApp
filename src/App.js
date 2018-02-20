import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Nest All components into this component! 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am React App</h1>
        <p> this is really working </p>
        // This is the Person component
        <Person />
        <Person />
        <Person />
      </div>
    );

     /// This code is what the above code gets compiled to. Above is easier to write.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
