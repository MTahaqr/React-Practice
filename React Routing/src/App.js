import React, { Component } from 'react';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        {/*<Link to="/About">About</Link>
        <br/>
         <Link to="/Contact">Contact</Link>
         <br/>
          <Link to="/Home">Home</Link>
           <br/>
           <Link to="/Inf">Inf</Link>
            <br/>
            <Link to="/Profile">Profile</Link>
            <br/>*/}
           


            {/*<!-- Always shows a header, even in smaller screens. -->*/}
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      {/*<!-- Title -->*/}
      <span className="mdl-layout-title">React Routing</span>
      {/*<!-- Add spacer, to align navigation to the right -->*/}
      <div className="mdl-layout-spacer"></div>
      {/*<!-- Navigation. We hide it in small screens. -->*/}
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <Link to="/About" className="mdl-navigation__link" >About</Link>
        
         <Link to="/Contact" className="mdl-navigation__link">Contact</Link>
         
          <Link to="/Home" className="mdl-navigation__link">Home</Link>
           
           <Link to="/Inf" className="mdl-navigation__link">Inf</Link>
            
            <Link to="/Profile" className="mdl-navigation__link">Profile</Link>
            
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">React Routing</span>
    <nav className="mdl-navigation">
      <Link to="/About" className="mdl-navigation__link">About</Link>
        
         <Link to="/Contact" className="mdl-navigation__link">Contact</Link>
         
          <Link to="/Home" className="mdl-navigation__link">Home</Link>
           
           <Link to="/Inf" className="mdl-navigation__link">Inf</Link>
            
            <Link to="/Profile" className="mdl-navigation__link">Profile</Link>
            
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">
       {this.props.children}
      {/*<!-- Your content goes here -->*/}
      </div>
  </main>
</div>
 
      </div>
    );
  }
}

export default App;
