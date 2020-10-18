import React from 'react';
import Logo from '../images/logo.svg';
import Start from '../components/Start';
import Rules from './Rules';

function Board() {
    return (
        <div className="board">
            <div className="board__container">
                <img src={Logo}/>
                <div className="board__scoreContainer">
                    <p className="board__title">SCORE</p>
                    <p className="board__score">12</p>
                </div>
            </div>
            <Start />
            <Rules />
        </div>
    )
}

export default Board
