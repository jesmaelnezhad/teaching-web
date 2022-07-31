import React from 'react';
import ReactDOM from 'react-dom/client';

// the following line is a simple example of using JSX
const myFirstElement = <h1>Hello React!</h1>

// the following line is an example of NOT using JSX
const mySecondElement = React.createElement('h1', {}, 'I do not use JSX!');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      // you will see that componentDidMount is executed only once
      let idx = Math.floor(Math.random() * 3);
      let colors = ["red", "yellow", "blue"]
      this.setState({favoritecolor: colors[idx]})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
