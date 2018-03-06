import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Nest All components into this component! 
class App extends Component {
 state = {
    persons: [
      { name: 'Marcus', age: 26},
      { name: 'John', age: 19},
      { name: 'Mark', age: 30}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Marcosious', age: 26},
        { name: 'John', age: 19},
        { name: 'Mark', age: 40}
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler}>My Hobbies: Racing</Person>

        
      </div>
    );

  }
}

export default App;
