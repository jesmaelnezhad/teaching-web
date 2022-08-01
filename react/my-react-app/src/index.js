import React from 'react';
import ReactDOM from 'react-dom/client';

// the following line is a simple example of using JSX
const myFirstElement = <h1>Hello React!</h1>

// the following line is an example of NOT using JSX
const mySecondElement = React.createElement('h1', {}, 'I do not use JSX!');

class Header extends React.Component {

  // mounting 1
  constructor(props) {
    super(props);
    alert("constructor");
    this.state = {favoritecolor: "red"};
  }

  // mounting 2
  // updating 1
  static getDerivedStateFromProps(props, state) {
    alert("getDerivedStateFromProps");
    return {favoritecolor: state.favoritecolor}
  }

  // updating 2
  shouldComponentUpdate() {
    alert("shouldComponentUpdate");
    return true;
  }

  // mounting 3
  // updating 3
  render() {
    alert("render")
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }

  // updating 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert("getSnapshotBeforeUpdate");
    return null
  }

  // updating 5
  componentDidUpdate() {
    alert("componentDidUpdate");
  }

  // mounting 4
  componentDidMount() {
    alert("componentDidMount");
    setTimeout(() => {
      // you will see that componentDidMount is executed only once
      let idx = Math.floor(Math.random() * 3);
      let colors = ["red", "yellow", "blue"]
      this.setState({favoritecolor: colors[idx]})
    }, 1000)
  }

  // unmounting 1
  componentWillUnmount() {
    alert("componentWillUnmount");
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="green"/>);
