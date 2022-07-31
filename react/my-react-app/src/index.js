import React from 'react';
import ReactDOM from 'react-dom/client';

// the following line is a simple example of using JSX
const myFirstElement = <h1>Hello React!</h1>

// the following line is an example of NOT using JSX
const mySecondElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
