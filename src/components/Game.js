import React, { useState } from 'react';
import GameResult from './GameResult';
import RulesModal from './RulesModal';
import Score from './Score';
import Rules from './Rules';


function Game() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    return (
        <div className="board">
            <Score />
            <GameResult />
            <Rules setIsModalOpen={setIsModalOpen}/>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}

export default Game
