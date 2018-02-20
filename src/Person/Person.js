// A component is just a function that returns JSX

import React from 'react';

const person = () => {
	// WHen using the {} you can only use simple one line expressions, nothing too crazy
	return <p>I am a person and Im {Math.floor(Math.random() * 30)} years old</p>
};


export default person;