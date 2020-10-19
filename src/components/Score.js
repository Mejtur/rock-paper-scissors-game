import React from 'react'
import Logo from '../images/logo.svg';

function Score() {
    return (
        <div className="board__container">
                <img src={Logo}/>
                <div className="board__scoreContainer">
                    <p className="board__title">SCORE</p>
                    <p className="board__score">12</p>
                </div>
            </div>
    )
}

export default Score
