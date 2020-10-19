import React from 'react'
import Choice from './Choice';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Scissors from '../images/icon-scissors.svg';


function GameResult() {
    return (
        <div className="gameResult">
            <div className="gameResult__result">
                <p className="gameResult__title">YOU PICKED</p>
                <Choice name="paper" image={Paper}/>
            </div>
            <div className="gameResult__result">
                <p className="gameResult__title">
                THE HOUSE PICKED
                </p>
                <Choice name="scissors" image={Scissors}/>
            </div>
        </div>
    )
}

export default GameResult
