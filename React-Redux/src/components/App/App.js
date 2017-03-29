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
    decrement : ()=> dispatch({ type : 'Decrement'}),
    incrementUserInput : (value)=>dispatch({ type : 'incrementUserInput', val : value})
    };
} 

class App extends Component {

    constructor(props){
        super(props);
        this.valueChange=this.valueChange.bind(this);
        this.handleClick=this.handleClick.bind(this);

        this.state ={
            valCounter : 0,
        }
    }

    valueChange(event){
        this.setState({
            valCounter : parseInt(event.target.value)
        })

    }
    handleClick(){
        
        this.props.incrementUserInput(this.state.valCounter);
    }

    handleClickRef(){
        this.props.incrementUserInput(parseInt(this.refs.task.value));
    }
    

  render() {
    return (
        <div>
        App this.props.counter = {this.props.counter}
        <br/>
        App this.state.valCounter = {this.state.valCounter}
        <br/>
        <input type="number" onChange={this.valueChange} placeholder="for state " />
        <input type="number" ref="task" placeholder="for Refs"/>
        <br/>
        <button onClick={this.handleClick}>incrementUserInput</button>
        <br/>
        <button onClick={this.props.increment}>Increment</button>
        <br/>
        <button onClick={this.props.decrement}>decrement</button>

       
        </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);