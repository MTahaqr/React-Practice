import React, { Component } from 'react'
import {Router , Route, IndexRoute , browserHistory} from 'react-router';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Inf from './Components/Inf/Inf';
import Profile from './Components/Profile/Profile';
import App from './App';

class Routes extends Component{
    render(){
        return(
          <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
               <Route path="/Home" component={Home}/>
               <Route path="/About" component={About}/>
               <Route path="/Contact" component={Contact}/>
               <Route path="/inf" component={Inf}/>
               <Route path="/Profile" component={Profile}/>
               </Route>
          </Router>
        )
    }
}
export default Routes;