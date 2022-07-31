# React Framework

## Notes about react
- Created by Facebook
- Most popular based on a survey in Stackoverflow in 2021
- Based on NodeJS
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

