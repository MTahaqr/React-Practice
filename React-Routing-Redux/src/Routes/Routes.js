import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import About from '../components/About/About';
import App from '../components/App/App';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Information from '../components/Information/Information';
import Profile from '../components/Profile/Profile';


class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Information" component={Information}/>
        <Route path="/Profile" component={Profile}/>
        </Route>                                               

        </Router>
);
  }
}

export default Routes;
