import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// App, comes from App.js file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
