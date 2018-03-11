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
    ],
    otherState: 'some value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26},
        { name: event.target.value, age: 36},
        { name: event.target.value, age: 20}
    ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // The line below creates a new array (copies it) instead of using the one in the state.
    // const persons = this.state.persons.slice();
    // Or use the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

      let persons = null;

     /*Just use pure Vanilla JS to say "if the showPersons value is true then 
      Create the elements in JSX*/

      // You can use map() to add a function (think of an action) to create the JSX Person components
/* The code below adds the name and age values from the persons array in state and returns
the Person component. The person in persons is like what you use in Vue. The person in the 
map() function can be anything, its just an arbatrary name variable given to the 
value sinside the persons arry in state*/ 

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age} />
            })}
          </div> 
          );
      }

    return (
      <div className="App">

        <button style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

      </div>
    );

  }
}

export default App;
