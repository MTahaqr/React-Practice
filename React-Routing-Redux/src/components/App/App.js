import React, { Component } from 'react';
import {Link} from 'react-router';
// import App from './components/App/App';
// import Home from '../Home/Home';
// import Contact from '../Contact/Contact';
// import Information from '../Information/Information';
// import About from '../About/About';
// import Profile from '../Profile/Profile';


class App extends Component {
  render() {
    return (
      <div>
  <h1>This is App</h1>
  <Link to="/Home">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/Profile">Profile</Link>
  <Link to="/Information">Information</Link>
  {this.props.children}

  
  </div>
  

    );
  }
}

export default App;
