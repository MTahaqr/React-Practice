import React, { Component } from 'react';
import { connect } from 'react-redux';




function mapStateToProps(state){
    return{
        counter : state,
    };
}

function mapDispatchToProps(dispatch){
    return{
    increment : ()=> dispatch({ type : 'Increment'}),
    decrement : ()=> dispatch({ type : 'Decrement'})
    };
} 

class App extends Component {
  render() {
    return (
        <div>
        App {this.props.counter}
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>decrement</button>

       
        </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);