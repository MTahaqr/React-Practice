import React, { Component } from 'react';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <Link to="/About">About</Link>
        <br/>
         <Link to="/Contact">Contact</Link>
         <br/>
          <Link to="/Home">Home</Link>
           <br/>
           <Link to="/Inf">Inf</Link>
            <br/>
            <Link to="/Profile">Profile</Link>
            <br/>
            {this.props.children}
 
      </div>
    );
  }
}

export default App;
