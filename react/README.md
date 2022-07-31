# React Framework

## Notes about react
- Created by Facebook
- Most popular based on a survey in Stackoverflow in 2021
- Based on NodeJS, and you need to be familiar with the following JS concepts: Classes, Arrow Functions, Variables (let, const, var), Array Methods like .map(), Destructuring, Modules, Ternary Operator, Spread Operator
- Prerequisite: intermediate experience in HTML, CSS, and JavaScript
- For a good tutorial check [here](https://www.w3schools.com/REACT)
- React creates a virtual DOM in memory and applies changes in that before changing the browser DOM

## Basic steps
Start basic project template
```bash
# create app
npx create-react-app my-react-app
# run the app
cd my-react-app
npm start
# now you see your app at localhost:3000 and change App.js to change your app
```

Now remove all files in the `src` directory, and create a new `index.js` file with the following content:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
```

Also, you could only keep `<div id="root"></div>` in the body of `public/index.html` **which is the target of the render function.**

## Things to learn in React
- Learn JSX
	- Basic JSX usage
	- Using `{...}` for expressions in JSX
	- Using `(...)` for multi-line HTML
	- The one-top-level-element rule and the usage of fragments
	- HTML keyword `class` is replaced by `className`
- Components
	- Function components
	- Class components
		- extend `React.Component` and implement a `render()` function
		- `props` are always passed to the consutructor class and must be passed to `super`
		- When `state` is changed, the component is re-rendered. Use `this.setState()` to change state.
	- Lifecycle: mounting, updating, unmounting
