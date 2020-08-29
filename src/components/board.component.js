import React from 'react';
import Square from './square.component'

export default class Board extends React.Component{
    renderSquare(i){
        return <Square value={i}/>              
    }
    render(){
        return (
            <div className="App-header">
            <div className="outer">
                <div className="inner">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    </div>
                    <div className="inner">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    </div>
                    <div className="inner">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    </div>
                </div>
                </div>
        )
    }
}