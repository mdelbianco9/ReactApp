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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26},
        { name: 'John', age: 19},
        { name: 'Mark', age: 40}
    ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26},
        { name: event.target.value, age: 19},
        { name: 'Mark', age: 40}
    ]
    })
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        margin: '20px',
        cursor: 'pointer'
      };

    return (
      <div className="App">
        <button style={style}
        onClick={this.switchNameHandler.bind(this, 'Maxamillion')}>Switch Name</button>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

        
      </div>
    );

  }
}

export default App;
