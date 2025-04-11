
import React, { Component } from 'react'; 

interface CounterProps{};
interface counterState{
    count:number
}

class Counter extends Component<CounterProps, counterState> { 

state: counterState = {
 count : 0,
 }; 
 increment = () =>  {
 this.setState({ count : this.state.count + 1 }); 
};  

render () { 
    return ( 
    <div> 
    <p>Count : {this.state.count}</p> 
    <button onClick={this.increment}>Increment</button> 
    </div> 
    );
    }
 } 
// exporter le compteur par défaut;
export default Counter;