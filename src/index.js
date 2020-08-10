// index.js serves as the entry point for <div id="root"> in index.html
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';            //<-- main parent App component (App.js)

// ReactDOM renders the App component in the "root" element in index.html
// React.StrictMode is used for development by activating additional checks for debugging
ReactDOM.render(<App />, document.getElementById('root'));
