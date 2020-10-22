import React from 'react'
import Logo from '../images/logo.svg';
import {useSelector} from 'react-redux';
import {selectScore} from '../features/gameScore';

function Score() {
    const score = useSelector(selectScore);
    return (
        <div className="board__container">
                <img src={Logo} alt="scoreLogo"/>
                <div className="board__scoreContainer">
                    <p className="board__title">SCORE</p>
                    <p className="board__score">{score}</p>
                </div>
            </div>
    )
}

export default Score
