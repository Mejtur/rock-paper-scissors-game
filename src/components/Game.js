import React from 'react';
import GameResult from './GameResult';
import Score from './Score';


function Game() {
    return (
        <div className="board">
            <Score />
            <GameResult />
        </div>
    )
}

export default Game
