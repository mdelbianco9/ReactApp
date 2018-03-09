// A component is just a function that returns JSX

import React from 'react';
import './Person.css';

const person = (props) => {
	// WHen using the {} you can only use simple one line expressions, nothing too crazy
	return (
		<div className="Person">
			<p onClick={props.click}>I am a {props.name} and Im {props.age} years old</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed}/>
		</div>
		)
};


export default person;