import React from 'react'
import App from '../App';
import Board from './board.component'
import Clock from './tick.component'
export default class Todolist extends React.Component{
    constructor(){
        super();
        this.name = 'Bapu'
    }
render(){
    return(
        <div>
            <Clock/>
            <Board/>
        </div>
    )
}
}