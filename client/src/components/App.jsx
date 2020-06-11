import React from 'react';
import Board from './Board.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={};
    //bind your functions here
    //Ex: this.myfunc = this.myFunc.bind(this);
  }
  render(){
      return (
        <div>
          <h1>React renders!</h1>
          <Board/>    
        </div>
      );
  }
}