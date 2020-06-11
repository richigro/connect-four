import React from 'react';
import Square from './Square.jsx';

function Board(){
    return(
      <div>
        <Square x={0} y={0}/>
        <Square x={1} y={0}/>
        <Square x={2} y={0}/>    
      </div>
    );
}

export default Board;